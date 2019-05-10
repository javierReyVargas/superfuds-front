

import { ProductsEffects } from './products.effects';
import { ShoppingCartEffects } from './shoppingcart.effects';
import { BillsEffects } from './bills.effects';
import { ReportEffects } from './report.effects';
import { UsersEffects } from './users.effects';

export const arrEffects: any[] = [
  ProductsEffects,
  ShoppingCartEffects,
  BillsEffects,
  ReportEffects,
  UsersEffects
];

export * from './products.effects';
export * from './shoppingcart.effects';
export * from './bills.effects';
export * from './report.effects';
export * from './users.effects';
