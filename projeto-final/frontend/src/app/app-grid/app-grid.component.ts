import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';

@Component({
  selector: 'app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.less']
})
export class AppGridComponent implements OnInit {

  produtos: Produto[] = [];
  
  produto: Produto = {
    codigo: "123",
    descricao: "ddd",
    valorCompra: 555,
    valorImpressao: 666
  };

  
  
  constructor() { }

  ngOnInit(): void {

    this.produtos = [
      {
        codigo: "123",
        descricao: "aaaa",
        valorCompra: 555,
        valorImpressao: 1234
      },
  
      {
        codigo: "444",
        descricao: "bbbb",
        valorCompra: 555,
        valorImpressao: 1234
      },
  
      {
        codigo: "657",
        descricao: "ccccc",
        valorCompra: 555,
        valorImpressao: 1234
      }
    ]
  }

  salvar(){
    console.info(this.produto);
    
  }

}
