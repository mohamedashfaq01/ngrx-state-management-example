// cart.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './app.state';
import { CartItem } from '../models/cart-item.model';

// export const selectCartState = (state: AppState) => {
//   console.log('STATE in selector:', state);
//   return state.cart
// };

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (cart: CartState) => { 
    console.log('STATE in CART:', cart);
    return cart.items
  }
);

export const selectCartTotal = createSelector(
  selectCartItems,
  (items: CartItem[]) => items.reduce((total, item) => total + item.quantity, 0)
);

