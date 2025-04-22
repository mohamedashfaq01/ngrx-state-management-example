import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCartTotal } from '../store/cart.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

 cartTotal$ = this.store.select(selectCartTotal);
 

  constructor(private router: Router, private store: Store<{selectCartTotal: number}>) {}

  ngOnInit(): void {
    console.log(this.cartTotal$);
  }

  

  goToFruits() {
    this.router.navigate(['fruits']);
  }

  goToVegetables() {
    this.router.navigate(['vegetables']);
  }
}
