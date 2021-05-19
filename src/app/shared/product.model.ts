export class Product {
  constructor(
    public id: string,
    public name: string,
    public category: string,
    public price: number,
    public stock: number,
    public active: boolean
  ) {}
}
