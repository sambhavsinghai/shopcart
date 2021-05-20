import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/shared/product.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['name', 'category', 'price', 'stock', 'active'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;

  constructor(public firestore: AngularFirestore) {}

  ngOnInit() {
    const data = this.firestore.collection<any>('product').valueChanges();
    data.subscribe((prod) => {
      this.dataSource = new MatTableDataSource(prod);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.target.value
      .trim()
      .toLocaleLowerCase();
  }
}

// this.products = prod.map((document) => {
//   console.log(document.payload.doc.data());
//   return {
//     id: document.payload.doc.id,
//     ...(document.payload.doc.data() as {}),
//   } as Product;
// });
// console.log(this.products);
