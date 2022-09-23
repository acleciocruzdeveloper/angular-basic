import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;

  public conditionClick: boolean = true;

  public nome: string = "nome";

  public listLanche: Array<{ descricao: string, qtde: number }> = [
    { descricao: "Hot Dog", qtde: 2 },
    { descricao: "X-Tudo", qtde: 1 },
    { descricao: "X-Bacon", qtde: 3 }
  ]

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if (this.condition) {
        this.condition = false;

      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  addItem() {
    this.listLanche.push({ descricao: "X-Salada", qtde: 4 })
  }

  apagarItem(event: number) {
    this.listLanche.splice(event, 1);
    console.log(event, 1);
  }

}
