import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
  <diretivas-estruturais></diretivas-estruturais>
  <app-diretivas-atributos>
    <h1>Diretivas e Atributos</h1>
    <hr>
  </app-diretivas-atributos>
  <app-new-component></app-new-component>

  <app-input [contador]="value"></app-input>

  <button (click)="sumValue()">Contar</button>
  <app-output (enviarDados)="setData($event)"></app-output>

  <hr>
  <ng-template [ngIf]="setData">
    <h3>{{inputValue?.name}} {{inputValue?.age}}</h3>
  </ng-template>
-->
  <app-food-add></app-food-add>
  <app-food-list></app-food-list>
  <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit {

  public value: number = 0;


  public inputValue: { name: string, age: number } | undefined;



  constructor() { }
  ngOnInit(): void {

  }

  sumValue() {
    this.value += 1;
  }

  setData(event: { name: string, age: number }) {
    this.inputValue = event;
  }

}
