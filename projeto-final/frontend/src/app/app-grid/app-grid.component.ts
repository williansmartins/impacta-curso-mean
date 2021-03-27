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
    _id: "0",
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
      console.info(retorno[0]);
    });
  }

  salvar(){
    if(this.produto._id){
      this.service.update(this.produto).subscribe( (retorno) => {
        console.info("Atualizado com sucesso!!!");
        console.info(retorno);
        this.getAll();
      });
    }else{
      this.service.create(this.produto).subscribe( (retorno) => {
        console.info("Inserido com sucesso!!!");
        console.info(retorno);
        this.getAll();
      });
    }
  }

  delete(produto){
    this.service.delete(produto._id).subscribe( (retorno) => {
      this.getAll();
    },
    (error: any) => {
        console.log(error)
    });
  }

  editar(produto){
    this.produto = produto;
  }

}
