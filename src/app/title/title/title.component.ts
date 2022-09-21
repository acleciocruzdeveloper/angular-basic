import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title: string = "Bem vindo";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log("Foi alterado"); // utizado para avisar quando houver alguma
    //modificação ou evento que o compontente foi alterado
  }

}
