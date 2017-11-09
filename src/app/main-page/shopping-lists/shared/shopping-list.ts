import { ProductItem } from '../product-items/shared/product-item';
import { User} from '../../../users/shared/user';

export class ShoppingList {
	id: any;
	name: String;
	productItems: ProductItem[];
	user: User;
}
