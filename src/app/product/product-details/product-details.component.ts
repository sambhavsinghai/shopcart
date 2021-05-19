import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  products: Product[];
  constructor(firestore: AngularFirestore) {
    var data = firestore.collection('product').snapshotChanges();
    data.subscribe((prod) => {
      this.products = prod.map((document) => {
        // console.log(document.payload.doc.id);
        // console.log(document.payload.doc.data());
        return {
          id: document.payload.doc.id,
          ...(document.payload.doc.data() as {}),
        } as Product;
      });

      console.log(this.products);
    });
  }

  ngOnInit(): void {}
}
