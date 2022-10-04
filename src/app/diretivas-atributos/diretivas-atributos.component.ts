import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;

  public higthPx: string = "20px;"
  public backgroudPx: string = "black";
  public fontCollor: string = "white";
  public alinhamentoX: string = "center";

  public list: Array<{ nome: string }> = [
    {nome: "Aclecio Cruz" }
  ];
  public nome: string = "";

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.valor) {
        this.valor = false;
      } else {
        this.valor = true;
      }
      if (this.higthPx == "20px") {
        this.higthPx = "50px";
        this.backgroudPx = "red";
        this.alinhamentoX = "center";
      } else {
        this.higthPx = "20px";
        this.backgroudPx = "green";
        this.alinhamentoX = "center";
      }
    }, 2000)
  };

  public salvar() {
    this.list.push({ nome: this.nome });
    this.nome = "";
  }

}
