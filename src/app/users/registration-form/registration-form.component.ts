import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {UsersService} from '../shared/user.service';
import {User} from '../shared/user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registerForm: FormGroup;
  user: User = new User();

  // public registerData = {username: '', password: '', email: ''};

  constructor(formBuilder: FormBuilder,
              private router: Router,
              private userService: UsersService) {

    this.registerForm = new FormGroup({
      'name': new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl(null, Validators.email),
      'password': new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
    // this.registerForm = formBuilder.group(
    //   {
    //     'name': [null, [
    //       Validators.required,
    //       Validators.minLength(3)
    //     ]],
    //     'email': [null, [
    //       Validators.required,
    //       Validators.minLength(3)
    //     ]],
    //     'password': ['', [
    //       Validators.required,
    //       Validators.minLength(3)
    //     ]]
    //   },
    // );

  }

  ngOnInit() {
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  onRegister() {
    let result = this.registerForm.value;
    this.user = this.registerForm.value;

    console.log(this.user);

    result = this.userService.createUser(this.user);
    result.subscribe(
      user => {
        this.router.navigate(['/']);
      },
      error => console.log(error)
    );
  }
}
