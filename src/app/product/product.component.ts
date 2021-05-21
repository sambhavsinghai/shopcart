import { Component, OnInit } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  addClicked(): void {
    this.dialog.open(AddProductComponent, {
      width: '350px',
    });
  }
}
