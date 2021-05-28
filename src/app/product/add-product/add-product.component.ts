import { Component, Inject, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  newName: string;
  newCategory: string;
  newPrice: string;
  newStock: string;
  newActive: boolean;

  constructor(
    private snackBar: MatSnackBar,
    public firestore: AngularFirestore,
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}

  addProduct(): void {
    let prod: Product;

    prod = {
      id: '' + Math.random().toString(36).substr(2, 9),
      name: this.newName,
      category: this.newCategory,
      price: this.newPrice,
      stock: this.newStock,
      active: this.newActive,
    };
    console.log(prod);

    this.firestore
      .collection('product')
      .doc(prod.id)
      .set(prod)
      .then(() => {
        this.snackBar.open('Product Added', 'Dismiss', {
          duration: 3000,
        });
        console.log('Document Added');
      });

    this.dialogRef.close();
  }
}
