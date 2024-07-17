import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Gacha } from '../interfaces/gachas';
import { GachaResponse } from '../interfaces/responses';
import { GachaLevels } from '../enum/gacha';

@Injectable({
  providedIn: 'root',
})
export class GachaService {
  private readonly GACHA_URL = 'http://localhost:3000/gacha';
  constructor(private readonly http: HttpClient) {}

  getGachaByLevel(level: GachaLevels): Observable<Gacha> {
    return this.http.get<GachaResponse>(`${this.GACHA_URL}/${level}`).pipe(
      map((r) => {
        const gacha: Gacha = {
          level: r.level,
          objectNumber: r.objectNumber
        };
        return gacha;
      }),
      catchError((error) => {
        console.error('Error fetching gacha', error);
        return throwError(() => error);
      })
    );
  }
}

