import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private _http: HttpClient) {}

  getCharacters(page: number = 1): Observable<any> {
    return this._http.get(`${this.apiUrl}/character/?page=${page}`);
  }

  searchCharacters(name: string): Observable<any> {
    return this._http.get(`${this.apiUrl}/character/?name=${name}`);
  }
}
