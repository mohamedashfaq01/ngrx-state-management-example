import { CartItem } from "../models/cart-item.model";

// export interface AppState {
//   cart: any;
//   fruits: any;
//   vegetables: any;
// }

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: [],
};
