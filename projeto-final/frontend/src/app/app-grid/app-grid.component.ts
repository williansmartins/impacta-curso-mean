import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';

@Component({
  selector: 'app-grid',
  templateUrl: './app-grid.component.html',
  styleUrls: ['./app-grid.component.less']
})
export class AppGridComponent implements OnInit {

  produto: Produto ={
    codigo: "123",
    descricao: "ddd",
    valorCompra: 555,
    valorImpressao: 666
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  salvar(){
    console.info(this.produto);
    
  }

}
