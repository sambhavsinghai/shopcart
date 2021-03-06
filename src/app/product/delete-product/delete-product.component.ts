import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'src/app/shared/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    public firestore: AngularFirestore,
    public dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteProduct(): void {
    this.firestore
      .collection('product')
      .doc(this.data.id)
      .delete()
      .then(() => {
        this.snackBar.open('Product Deleted', 'Dismiss', {
          duration: 3000,
        });
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
    this.dialogRef.close();
  }
}
