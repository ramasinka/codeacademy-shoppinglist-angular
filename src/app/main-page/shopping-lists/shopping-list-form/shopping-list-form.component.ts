import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShoppingList} from '../shared/shopping-list';
import {ShoppingListService} from '../shared/shopping-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../../shared/app.service';

@Component({
  selector: 'app-shopping-list-form',
  templateUrl: './shopping-list-form.component.html',
  styleUrls: ['./shopping-list-form.component.scss']
})
export class ShoppingListFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  shoppingList: ShoppingList = new ShoppingList();

  constructor(private formBuilder: FormBuilder,
              private _router: Router,
              private activatedRoute: ActivatedRoute,
              private appService: AppService,
              private shoppingListService: ShoppingListService) {

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
    console.log(' ID: ' + this.activatedRoute.params.subscribe());
    var id = this.activatedRoute.params.subscribe(
      params => {
        var id = params['id'];

        this.title = id ? 'Edit user' : 'New user';
        // if(id != null){ this.title = "Edit"} else{ this.title = "New user"}


        if (!id) {
          // if id == null return ( tuscia forma)
          return;
        }
        // jei id != null request to backend user
        this.shoppingListService.getShoppingListById(id).subscribe(
          shoppingList => this.shoppingList = shoppingList,
          response => console.log(response.json().shoppingList)
        );

      }
    );
  }

  onSave() {
    var result = this.form.value;
    var shoppingList = this.form.value;

    if (this.shoppingList.id) {
      result = this.shoppingListService.updateShoppingList(this.shoppingList);
      console.log(this.shoppingList.id);
    } else {
      result = this.shoppingListService.createShoppingList(this.shoppingList);
      console.log(this.shoppingList.id);
      // console.log('user' + user.name);
      console.log('result' + result);
    }

    result.subscribe(
      shoppingList => {
        this._router.navigate(['/lists']);
        this.appService.publish('shoppingList-update');

      },
      error => console.log(error)
    );
  }

}
