import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item.model';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss']
})
export class VegetablesComponent implements OnInit {

  
  onion: CartItem = {
    id: 4,
    name: "Onion",
    pic: "https://media.istockphoto.com/id/621472882/photo/purple-onion-on-white.jpg?s=612x612&w=0&k=20&c=4W3IQtB5XkkKPT-a22MgkmL-hrn-2FPiUchL-hLbtFk=",
    price: 0,
    quantity: 0
  };

  tomato: CartItem = { 
    id: 5,
    name: "Tomato",
    price: 0,
    quantity: 0,
    pic: "https://media.istockphoto.com/id/91476821/photo/three-tomatoes.jpg?b=1&s=612x612&w=0&k=20&c=eOyYlyUEClMkm9hqYX7IMGEHqKYnAiLKr5tF80cAI84="
  };

  potato: CartItem  = {
    id: 6,
    name: "Potato",
    price: 0,
    quantity: 0,
    pic: "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?b=1&s=612x612&w=0&k=20&c=txk4DGWXL9cntyePO6C-X8inysng0mQ0lCuW2FdjG00="
  };


  constructor() { }

  ngOnInit(): void {
  }

}
