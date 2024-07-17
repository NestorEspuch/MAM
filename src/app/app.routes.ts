import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
        import("./gacha/gacha.routes").then((p) => p.GACHA_ROUTES),
},
];
