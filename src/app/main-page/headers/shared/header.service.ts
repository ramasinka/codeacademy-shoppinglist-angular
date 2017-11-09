import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { RequestOptions } from '@angular/http';

@Injectable()

export class HeaderService {

  constructor() { }

  generateHeader(){
    var headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+localStorage.getItem('access_token')});
    var options = new RequestOptions({ headers: headers });
    return options;
  }
}
