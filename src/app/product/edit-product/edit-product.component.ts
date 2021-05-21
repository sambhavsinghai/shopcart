import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  constructor(
    public firestore: AngularFirestore,
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}
  newName: string = this.data.name;
  newCategory: string = this.data.category;
  newPrice: string = this.data.price;
  newStock: string = this.data.stock;
  newActive: boolean = this.data.active;

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateProduct(): void {
    console.log(this.data);
    let prod: Product;

    prod = {
      id: this.data.id,
      name: this.newName,
      category: this.newCategory,
      price: this.newPrice,
      stock: this.newStock,
      active: this.newActive,
    };
    this.firestore
      .collection('product')
      .doc(this.data.id)
      .update(prod)
      .then(() => {
        console.log(' updated document');
      });

    console.log('here');

    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
