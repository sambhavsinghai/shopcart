export class Product {
  constructor(
    public id: string,
    public name: string,
    public category: string,
    public price: string,
    public stock: string,
    public active: boolean
  ) {}
}
// export interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   stock: number;
//   active: boolean;
// }
