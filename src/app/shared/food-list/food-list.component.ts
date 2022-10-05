import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public geData: Array<FoodList> = [];

  constructor(
    private foodListService: FoodListService
  ) { }

  ngOnInit(): void {
    this.foodListService.sendData().subscribe(
      res => this.geData = res
    );

    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`Adicionado: ${res.name}`);
        return this.geData.push(res);
      }
    );
  }

  foodListDelete(id: number) {
    return this.foodListService.foodListDelete(id)
      .subscribe(
        res => {
          this.geData = this.geData.filter(
            item => {
              return id != item.id;
            }
          )
        },
        err => err

      )
  }

  foodListEdit(value: string, id: number){
    this.foodListService.foodListEdit(value, id).subscribe(
      res => {
        return console.log(res)
      },
      error => error
    )
  }

}
