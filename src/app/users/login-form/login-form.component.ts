import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../shared/user';
import {UsersService} from '../shared/user.service';
import {RegistrationFormComponent} from '../registration-form/registration-form.component'
import {AuthorizationService} from '../authorization/shared/authorization.service'

// import { AppService } from '../../shared/app.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private access_token: any;
  public loginData = {username: '', password: ''};
  form: FormGroup;
  title: string;
  user: User = new User();

  constructor(formBuilder: FormBuilder,
              private usersService: UsersService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private authorizationService: AuthorizationService,) {

    this.form = formBuilder.group(
      {
        name: ['', [
          Validators.required,
          Validators.minLength(3)
        ]]
      }
    );
  }

  ngOnInit() {
  }

  onLogin(http) {
    this.authorizationService.obtainAccessToken(this.loginData);
    console.log(this.loginData);
    // const access_token = localStorage.getItem('access_token');
    // this.router.navigate(['main']);
  }
}
