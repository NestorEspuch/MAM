import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GachaComponent } from './gacha/gacha.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, GachaComponent, CommonModule]
})
export class AppComponent {
  title = 'Mancos y Mazmorras';
}
