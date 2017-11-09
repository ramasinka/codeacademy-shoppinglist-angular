import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from './shared/shopping-list.service';
import {ShoppingList} from './shared/shopping-list';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-shopping-lists',
	templateUrl: './shopping-lists.component.html',
	styleUrls: ['./shopping-lists.component.css']
})
export class ShoppingListsComponent implements OnInit {
	private shoppingLists: ShoppingList[] = [];
	private subscription: Subscription;
	constructor(private shoppingListService: ShoppingListService) { }

	ngOnInit() {
		return this.shoppingListService.getAllShoppingLists().subscribe(
			shoppingLists => this.shoppingLists = shoppingLists,
			(error: Response) => console.log(error)
			)
	}

}
