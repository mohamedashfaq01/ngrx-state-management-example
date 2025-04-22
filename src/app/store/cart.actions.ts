import { createAction, props } from "@ngrx/store";
import { CartItem } from "../models/cart-item.model";

export const addToCart = createAction('[Item] Add To Cart', props<{ item: CartItem }>());
export const removeFromCart = createAction('[Item] Remove From Cart', props<{ itemId: number }>());
