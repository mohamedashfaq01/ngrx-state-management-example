import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../store/cart.actions';
import { CartItem } from '../models/cart-item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  @Input() item!: CartItem;

  constructor(private store: Store) {
    store.subscribe(data => console.log('STORE:', data));
  }

  ngOnInit(): void {}

  addToCart() {
    console.log('this.item ', this.item);
    this.store.dispatch(addToCart({ item: this.item }));
  }

  removeFromCart() {
    this.store.dispatch(removeFromCart({ itemId: this.item.id }));
  }
}
