// import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Product } from 'src/app/shared/product.model';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css'],
// })
// export class ProductListComponent implements OnInit {
//   products: Product[];
//   constructor(firestore: AngularFirestore) {
//     var data = firestore.collection('product').snapshotChanges();
//     data.subscribe((prod) => {
//       this.products = prod.map((document) => {
//         // console.log(document.payload.doc.id);
//         // console.log(document.payload.doc.data());
//         return {
//           id: document.payload.doc.id,
//           ...(document.payload.doc.data() as {}),
//         } as Product;
//       });
//       debugger;
//       console.log(this.products);
//     });
//   }

//   ngOnInit(): void {}
// }

import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/shared/product.model';
import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  dataSource = MatTableDataSource<Product> = new MatTableDataSource();


  constructor(public firestore: AngularFirestore) {
    
  }
  displayedColumns: string[] = ['name', 'category', 'price', 'stock', 'active'];
  
  this.dataSource = new MatTableDataSource(this.products);
  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  OnInit() {
    var data = this.firestore.collection('product').snapshotChanges();

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
    this.dataSource.paginator = this.paginator;
  }
}
// export interface PeriodicElement {
//   name: string;
//   stock: number;
//   price: number;
//   category: string;
//   active: boolean;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { stock: 1, name: 'Hydrogen', price: 1.0079, category: 'H', active: true },
//   { stock: 2, name: 'Helium', price: 4.0026, category: 'He', active: true },
//   { stock: 3, name: 'Lithium', price: 6.941, category: 'Li', active: true },
// ];
// //
