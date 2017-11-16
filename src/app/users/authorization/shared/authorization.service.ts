import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {UsersService} from '../../shared/user.service';
import {User} from '../../shared/user';
import {HeaderService} from '../../../main-page/headers/shared/header.service';

@Injectable()

export class AuthorizationService {
  private backEndUrl = 'http://localhost:8082/auth/oauth/token';
  private access_token: any;
  private user: User = new User();

  constructor(private _http: Http,
              private _router: Router,
              private headerService: HeaderService,
              private cookieService: CookieService,
              private userService: UsersService) {
  }


  obtainAccessToken(loginData) {
    const params = new URLSearchParams();
    const userName = loginData.username;
    const userPassword = loginData.password;
    params.append('username', userName);
    params.append('password', userPassword);
    params.append('grant_type', 'password');
    params.append('client_id', 'ClientId');
    params.append('client_secret', 'secret');
    const headers = new Headers({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Basic ' + btoa('ClientId:secret')
    });
    const options = new RequestOptions({headers: headers});

    this._http.post('http://localhost:8082/auth/oauth/token', params.toString(), options)
      .map(res => res.json())
      .subscribe(
        data => this.saveToken(data, userName, userPassword),
        err => alert('Invalid Credentials'));

  }

  saveToken(tokenData, userName, userPassword) {

    const expireDate = new Date().getTime() + (1000 * tokenData.expires_in);
    localStorage.setItem('access_token', tokenData.access_token);
    const userByName = this.userService.getUserByName(userName);
    userByName.subscribe(
      user => {
        this.cookieService.set('user_id', user.id);
      },
      error => console.log(error)
    );


    this._router.navigate(['/main']);
  }


// getAccessToken() {

// Begin assigning parameters
// Params = Params.append('grant_type', 'client_credentials');
// Params = Params.append('scope', 'openid');
// Params = Params.append('client_id', 'ClientId');
// Params = Params.append('client_secret', 'secret');

// http://localhost:8082/auth/oauth/token?grant_type=client_credentials&scope=openid&client_id=ClientId&client_secret=secret
// return this._http.post("http://localhost:8082/auth/oauth/token?grant_type=client_credentials&scope=openid&client_id=ClientId&client_secret=secret", "")
//  {queryParams: { grant_type: 'client_credentials', scope: 'openid', client_id: 'ClientId', client_secret: 'secret' }}, {headers : new Headers({'X-Requested-With': 'XMLHttpRequest'})})
// .subscribe(res =>  this.redirectToMainPage(res.json().access_token));
// }


// redirectToMainPage(access_token){
//   localStorage.setItem("access_token", access_token);
//   this.access_token = localStorage.getItem('access_token');
//   this.router.navigate(['main']);
// }
}
