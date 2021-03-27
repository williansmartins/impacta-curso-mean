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

  delete(id: String){
    return this.http.delete("http://localhost:3200/produtos/" + id);
  }

  update(model: Produto): Observable<Produto> {
    return this.http.put<Produto>("http://localhost:3200/produtos/" + model._id, model);
  }

}
