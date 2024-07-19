# Etapa 1: Construir la aplicación Angular
FROM node:16 AS build

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de proyecto
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build --prod

# Etapa 2: Servir la aplicación con un servidor web
FROM nginx:alpine

# Copiar archivos compilados de la etapa de construcción
COPY --from=build /app/dist/mancosymazmorras /usr/share/nginx/html

# Copiar configuración personalizada de Nginx (opcional)
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
