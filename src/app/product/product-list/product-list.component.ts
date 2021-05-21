import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/shared/product.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = [
    'name',
    'category',
    'price',
    'stock',
    'active',
    'actions',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;

  constructor(public firestore: AngularFirestore, public dialog: MatDialog) {}

  ngOnInit() {
    const data = this.firestore.collection<any>('product').valueChanges();
    data.subscribe((prod) => {
      this.dataSource = new MatTableDataSource(prod);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(filterValue): void {
    this.dataSource.filter = filterValue.target.value
      .trim()
      .toLocaleLowerCase();
  }

  editClicked(data): void {
    this.dialog.open(EditProductComponent, {
      width: '350px',
      data: data,
    });
  }

  deleteClicked(document): void {
    console.log(document);
    const result: boolean = confirm('Want to delete?');
    if (result) {
      this.firestore
        .collection('product')
        .doc(document.id)
        .delete()
        .then(() => {
          console.log('Document successfully deleted!');
        })
        .catch((error) => {
          console.error('Error removing document: ', error);
        });
    }
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
