import {User} from './User';
import {Product} from './Product';

export class Bill {
  id: number;
  totalBill: number;
  client: User;
  products: Product[];
  created_at: string;
}
