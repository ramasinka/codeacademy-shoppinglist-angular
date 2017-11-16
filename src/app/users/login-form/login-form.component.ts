import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/user';
import {AuthorizationService} from '../authorization/shared/authorization.service';

// import { AppService } from '../../shared/app.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public loginData = {username: '', password: ''};
  form: FormGroup;
  title: string;
  user: User = new User();

  constructor(formBuilder: FormBuilder,
              private authorizationService: AuthorizationService) {

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
  }
}
