

import { ProductsEffects } from './products.effects';
import { ShoppingCartEffects } from './shoppingcart.effects';
import { BillsEffects } from './bills.effects';

export const arrEffects: any[] = [
  ProductsEffects,
  ShoppingCartEffects,
  BillsEffects
];

export * from './products.effects';
export * from './shoppingcart.effects';
export * from './bills.effects';
