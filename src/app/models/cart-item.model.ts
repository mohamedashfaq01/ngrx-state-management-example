// cart-item.model.ts

import { Product } from "./product.model";

export interface CartItem {
    id: number;
    pic: string;
    name: string;
    price: number;
    quantity: number;
}
