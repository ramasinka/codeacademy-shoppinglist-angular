import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {HeaderService} from '../../headers/shared/header.service';
import {ShoppingList} from './shopping-list';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../../../users/shared/user';
import {UsersService} from '../../../users/shared/user.service';


@Injectable()

export class ShoppingListService {
  private backEndUrl = 'http://localhost:8084';
  private shoppingList: ShoppingList = new ShoppingList();
  private user: User = new User();

  constructor(private http: Http,
              private cookieService: CookieService,
              private userService: UsersService,
              private headerService: HeaderService) {
  }

  getAllShoppingLists(): Observable<any> {
    const options = this.headerService.addTokenToHeader();
    return this.http.get(this.backEndUrl + '/getShoppingLists', options)
      .map((response: Response) => {
        return response.json();
      });
  }

  getShoppingListById(id: number): Observable<any> {
    const options = this.headerService.addTokenToHeader();
    return this.http.get(this.backEndUrl + '/getShoppingList/' + id, options)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  updateShoppingList(shoppingList: ShoppingList) {
    const options = this.headerService.addTokenToHeader();
    this.http.post(this.backEndUrl + '/updateShoppingList/', shoppingList, options
    )
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  createShoppingList(shoppingList: ShoppingList) {

    this.user.id = this.cookieService.get('user_id');
    this.shoppingList.userId = this.user.id;

    const urlParams = new URLSearchParams();
    urlParams.set('listName', shoppingList.name);
    urlParams.set('userId', this.user.id);

    const requestOption = this.headerService.addTokenToHeader();
    requestOption.params = urlParams;
    return this.http.post(this.backEndUrl + '/createShoppingList', '', requestOption)
      .map(
        (response: Response) => {
          return true;
        });
  }

  getShoppingListsByUser(userId: number) {
    const options = this.headerService.addTokenToHeader();
    return this.http.get(this.backEndUrl + '/getShoppingLists/' + userId, options)
      .map((response: Response) => {
        return response.json();
      });
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
