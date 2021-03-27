import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto';
import { ProdutoServiceService } from '../produto-service.service';

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

  
  
  constructor(private service: ProdutoServiceService) { }

  ngOnInit(): void {

    // this.produtos = [
    //   {
    //     codigo: "123",
    //     descricao: "aaaa",
    //     valorCompra: 555,
    //     valorImpressao: 1234
    //   },
  
    //   {
    //     codigo: "444",
    //     descricao: "bbbb",
    //     valorCompra: 555,
    //     valorImpressao: 1234
    //   },
  
    //   {
    //     codigo: "657",
    //     descricao: "ccccc",
    //     valorCompra: 555,
    //     valorImpressao: 1234
    //   }
    // ]

    this.service.getAll().subscribe( (retorno) => {
      this.produtos = retorno;
    });
  }

  salvar(){
    console.info(this.produto);
    
  }

}
