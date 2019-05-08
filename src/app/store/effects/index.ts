

import { ProductsEffects } from './products.effects';
import { ShoppingCartEffects } from './shoppingcart.effects';

export const arrEffects: any[] = [
  ProductsEffects,
  ShoppingCartEffects
];

export * from './products.effects';
export * from './shoppingcart.effects';
