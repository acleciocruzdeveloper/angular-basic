import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Aclecio";
  public idade: number = 43;
  public dataAtual: Date = new Date();

  public position: { x: number, y: number } = {
    x: 0,
    y: 0
  };

  checkedDisabled: boolean = true;

  public urlImg: string = 'https://www.nme.com/wp-content/uploads/2017/03/Stephen-King-696x442.png';
  public imgTitle: string = 'Palhaço It a Coisa';

  constructor() { }

  ngOnInit(): void {
  }

  moseMoveEvent(valor: MouseEvent) {

    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;

  }

}
