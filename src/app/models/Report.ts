import {User} from './User';

export class Report {
  product: string;
  price: number;
  quantityBuy: number;
  provider: User;
  client: User;
  created_at: string;
}
