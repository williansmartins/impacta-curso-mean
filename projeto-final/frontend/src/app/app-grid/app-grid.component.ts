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
    codigo: "0",
    descricao: "",
    valorCompra: null,
    valorImpressao: null
  };
  
  constructor(private service: ProdutoServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe( (retorno) => {
      this.produtos = retorno;
    });
  }

  salvar(){
    console.info(this.produto);

    this.service.create(this.produto).subscribe( (retorno) => {
      console.info("Inserido com sucesso!!!");
      console.info(retorno);
      this.getAll();

    });
  }

}
