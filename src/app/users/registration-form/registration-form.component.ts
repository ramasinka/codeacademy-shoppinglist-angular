import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  form: FormGroup;
  constructor(
       formBuilder: FormBuilder,
       private router: Router,
       private activatedRoute: ActivatedRoute
    ) {

     this.form = formBuilder.group(
        {
          name:['',[
            Validators.required,
            Validators.minLength(3)
          ]]
        }
      )

   }
  ngOnInit() {
  }


  onLogin(){

  }

}
