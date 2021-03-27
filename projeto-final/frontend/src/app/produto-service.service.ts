import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from './models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>("http://localhost:3200/produtos");
  }

  create(model: Produto): Observable<Produto> {
    return this.http.post<Produto>("http://localhost:3200/produtos", model);
  }

  // getOne(id: number): Observable<Produto> {
  //   const produto = HEROES.find(h => h.id === id) as Hero;
  //   return of(produto);
  // }
}
