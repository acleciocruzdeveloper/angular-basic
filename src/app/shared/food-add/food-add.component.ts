import { FoodListService } from 'src/app/services/food-list.service';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(
    private foodListService: FoodListService
  ) { }

  ngOnInit(): void {
  }

  addValueList(value: string) {
    return this.foodListService.foodListAdd(value).subscribe(
      res => {
        this.foodListService.foddListAlert(res);
      },
      error =>  error
    );
    console.log(value);
  }

  /*
  addValueList(value: string) {
    return this.foodListService.listFood.push(value);
    console.log(value);
  }
  */

}
