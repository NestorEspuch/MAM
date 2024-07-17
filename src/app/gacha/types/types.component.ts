import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'mam-types',
  standalone: true,
  imports: [NgFor],
  templateUrl: './types.component.html',
  styleUrl: './types.component.scss',
})
export class TypesComponent {
  gachaLevels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
}
