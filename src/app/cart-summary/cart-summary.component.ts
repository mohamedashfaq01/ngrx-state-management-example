import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartItems, selectCartState, selectCartTotal } from '../store/cart.selectors';
import { CartItem } from '../models/cart-item.model';
import {  CartState } from '../store/app.state';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent {

  cartItems$ = this.store.select(selectCartItems);
  cartTotal$ = this.store.select(selectCartTotal);

  constructor(private store: Store) {
   

    // this.cartItems$ = this.store.select(selectCartState);
    // console.log(" this.cartItems$ ", this.cartItems$ );
  }
 
}


