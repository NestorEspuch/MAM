import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { GachaResponse } from '../gacha/interfaces/responses';
import { GachaLevels, LevelPrices } from './enum/gacha';
import { GachaService } from './services/gacha.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'mam-gacha',
  standalone: true,
  templateUrl: './gacha.component.html',
  styleUrls: ['./gacha.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class GachaComponent implements OnInit {
  gachaResult: GachaResponse | null = null;
  eGachaLevel = GachaLevels;

  gachaForm: FormGroup = new FormGroup({});

  constructor(private gachaService: GachaService, private fb: FormBuilder) {}

  ngOnInit() {
    this.gachaForm = this.fb.group({
      gachaLevel: [null, [Validators.required]],
    });
  }

  rollGacha() {
    const gachaLevelResult = this.gachaForm.get('gachaLevel')?.value;
    if (gachaLevelResult !== null && gachaLevelResult !== 'null') {
      this.gachaService
        .getGachaByLevel(gachaLevelResult)
        .subscribe((result: GachaResponse) => {
          this.gachaResult = result;
          Swal.fire({
            title: "Recibiste el objeto " + this.gachaResult.objectNumber,
            text: "El nivel de gacha fue el " + this.gachaResult.level,
            icon: "success"
          });
        });
    } else {
      Swal.fire({
        title: 'Lee capullo',
        text: 'Selecciona un nivel de gacha',
        icon: 'error',
        confirmButtonText: 'A',
      });
    }
  }

  getLevelPrice(level: string): number {
    return LevelPrices[level as keyof typeof LevelPrices];
  }
}
