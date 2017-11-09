import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ShoppingList } from './shopping-list';
import { RequestOptions } from '@angular/http';
import { HeaderService } from '../../headers/shared/header.service'

@Injectable()

export class ShoppingListService {
  private backEndUrl: string = "http://localhost:8084";

  constructor(private http: Http,
    private headerService: HeaderService) { }

  getAllShoppingLists(): Observable<any> {
    console.log(localStorage.getItem('access_token'));
     var headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+localStorage.getItem('access_token')});
    var options = new RequestOptions({ headers: headers });
    console.log(options);
    return this.http.get(this.backEndUrl + '/getShoppingLists', options)
      .map((response: Response) => { return response.json() });
  }

  // createUser(user) {
  //   return this.http.post(this.backEndUrl + '/user',
  //     user,
  //     { headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' }) })
  //     .map(
  //     (response: Response) => {
  //       return true;
  //     }
  //     )
  // }

  // getUserById(id: number): Observable<any> {
  //   return this.http.get(this.backEndUrl + '/user/' + id)
  //     .map(
  //     (response: Response) => {
  //       return response.json();
  //     }
  //     );
  // }

  // getUserByName(name: String): Observable<any> {
  //   return this.http.get(this.backEndUrl + '/userByName/' + name)
  //     .map(
  //     (response: Response) => {
  //       return response.json();
  //     }
  //     );
  // }

  // updateUser(user, id: number) {
  //   user.email = 'test';
  //   return this.http.post(this.backEndUrl + '/user/update/' + id,
  //     user,
  //     { headers: new Headers({ 'Content-type': 'application/json' }) })
  //     .map(
  //     (response: Response) => {
  //       return response.json();
  //     }
  //     )
  // }

  // deleteUser(id: number) {
  //   return this.http.delete(this.backEndUrl + "" + id);
  // }

}
