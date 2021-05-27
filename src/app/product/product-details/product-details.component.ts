import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/product.model';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  prod: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.prod = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.queryParams.name,
      category: this.route.snapshot.queryParams.category,
      price: this.route.snapshot.queryParams.price,
      stock: this.route.snapshot.queryParams.stock,
      active: this.route.snapshot.queryParams.active,
    };
    console.log(this.prod);
  }
}
