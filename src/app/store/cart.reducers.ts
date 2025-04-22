import { addToCart, removeFromCart } from "./cart.actions";
import { Action, createReducer, on } from '@ngrx/store';
import { CartState, initialState } from "./app.state";


// export const initialState = 0;

// export const cartReducer = createReducer(
//   initialState,
//   on(addToCart, (state, props) => {
//     console.log(props);
//     return state + 1;
//   }),
//   on(removeFromCart, state => state - 1)
// )

// reducers/cart.reducer.ts

const _cartReducer =  createReducer(
  initialState,
  on(addToCart, (state, { item }) => {
    const existingItem = state.items.find(i => i.id === item.id);
    if (existingItem) {
      return {
        ...state,
        items: state.items.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    }
    return { ...state, items: [...state.items, { ...item, quantity: 1 }] };
  }),
  on(removeFromCart, (state, { itemId }) => ({
    ...state,
    items: state.items.filter(item => item.id !== itemId),
  }))
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return _cartReducer(state, action);
}
