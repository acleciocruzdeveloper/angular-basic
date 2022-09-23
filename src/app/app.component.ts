import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <diretivas-estruturais></diretivas-estruturais>
  <router-outlet></router-outlet>`
})

export class AppComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }

}
