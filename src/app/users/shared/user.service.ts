import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {HeaderService} from '../../main-page/headers/shared/header.service';
import {User} from "./user";

@Injectable()

export class UsersService {
  private backEndUrl = 'http://localhost:8084';

  constructor(private http: Http,
              private headerService: HeaderService) {
  }

  getUsers(): Observable<any> {
    return this.http.get(this.backEndUrl + '/users')
      .map((response: Response) => {
        return response.json();
      });
  }

  createUser(user) {
    return this.http.post(this.backEndUrl + '/createUser',
      user,
      {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
      .map(
        (response: Response) => {
          return true;
        }
      );
  }

  getUserById(id: number): Observable<User> {
    const options = this.headerService.addTokenToHeader();
    return this.http.get(this.backEndUrl + '/user/' + id, options)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  getUserByName(name: String): Observable<any> {
    const options = this.headerService.addTokenToHeader();
    return this.http.get(this.backEndUrl + '/userByName/' + name, options)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  updateUser(user, id: number) {
    user.email = 'test';
    return this.http.post(this.backEndUrl + '/user/update/' + id,
      user,
      {headers: new Headers({'Content-type': 'application/json'})})
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  deleteUser(id: number) {
    return this.http.delete(this.backEndUrl + '' + id);
  }

}
