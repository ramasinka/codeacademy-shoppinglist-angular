import {ProductItem} from '../../product-items/shared/product-item';
import {User} from '../../../users/shared/user';

export class ShoppingList {
   id: number;
   name: string;
   productItems: ProductItem[];
   userId: number;
}
