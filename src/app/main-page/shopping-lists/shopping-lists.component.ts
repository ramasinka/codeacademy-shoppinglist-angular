import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from './shared/shopping-list.service';
import {ShoppingList} from './shared/shopping-list';
import {Subscription} from 'rxjs/Subscription';
import {CookieService} from "ngx-cookie-service";
import {User} from "../../users/shared/user";
import {AppService} from "../../shared/app.service";

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.css']
})
export class ShoppingListsComponent implements OnInit {
  shoppingLists: ShoppingList[] = [];
  subscription: Subscription;
  user: User = new User();

  constructor(private shoppingListService: ShoppingListService,
              private appService: AppService,
              private cookieService: CookieService) {
  }

  ngOnInit() {
    this.loadShoppingLists();
    this.subscription = this.appService.on('shoppingList-update')
      .subscribe(
        () => this.loadShoppingLists()
      );
  }

  loadShoppingLists() {
    this.user.id = this.cookieService.get('user_id');
    return this.shoppingListService.getShoppingListsByUser(this.user.id).subscribe(
      shoppingLists => this.shoppingLists = shoppingLists,
      (error: Response) => console.log(error)
    );
  }
}
