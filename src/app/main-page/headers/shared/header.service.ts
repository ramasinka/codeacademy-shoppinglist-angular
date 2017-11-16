import {Injectable} from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class HeaderService {

  constructor() {
  }

  addTokenToHeader() {
    const headers = new Headers({
      'Content-type': 'application/json; charset=utf-8',
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    });
    const options = new RequestOptions({headers: headers});
    return options;
  }
}
