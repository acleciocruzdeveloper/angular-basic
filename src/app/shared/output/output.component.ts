import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() enviarDados = new EventEmitter();

  public listData: Array<{name: string, age: number}> = [
    {name: "Maria Aparecida", age: 38},
    {name: "Kamilla de Souza", age: 23},
    {name: "Mylena de Souza", age: 18},
    {name: "Pedro Henrique", age: 16},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getData(event: number){
    this.enviarDados.emit(this.listData[event]);
    console.log(this.listData[event])

  }

}
