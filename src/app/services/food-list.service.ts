import { FoodList } from 'src/app/module/food-list';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  public listFood: Array<string> = [
    "Mamão",
    "Maracujá",
    "Abacaxi",
    "Laranja",
    "Goiaba"
  ]


  public url: string = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  sendData(): Observable<Array<FoodList>> {
    return this.httpClient.get<Array<FoodList>>(`${this.url}foodList`)
      .pipe(
        res => res,
        err => err,
      );
  }

  foodListAdd(value: string): Observable<FoodList> {
    return this.httpClient.post<FoodList>(`${this.url}foodList`, { name: value })
      .pipe(
        res => res,
        error => error
      );
  }

  foddListAlert(value: FoodList) {
    return this.emitEvent.emit(value);
  }

  foodListEdit(value: string, id: number): Observable<FoodList> {
    return this.httpClient.put<FoodList>(`${this.url}foodList/${id}`, { name: value })
      .pipe(
        res => res,
        error => error
      )
  }

  foodListDelete(id: number): Observable<FoodList> {
    return this.httpClient.delete<FoodList>(`${this.url}foodList/${id}`)
    .pipe(
      res => res,
      err => err
    )
  }

  /* foodListAdd(value: string) {
     this.foddListAlert(value)
     return this.listFood.push(value);
   }
   foddListAlert(value: string){
     return this.emitEvent.emit(value);
   }
 */

}
