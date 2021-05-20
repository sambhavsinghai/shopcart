import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('categoryInput') categoryInputRef: ElementRef;
  @ViewChild('priceInput') priceInputRef: ElementRef;
  @ViewChild('stockInput') stockInputRef: ElementRef;
  @ViewChild('activeInput') activeInputRef: ElementRef;
  // firstname = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
  onAddItem() {
    const id = 'one';
    const name = this.nameInputRef.nativeElement.value;
    const category = this.categoryInputRef.nativeElement.value;
    const price = this.priceInputRef.nativeElement.value;
    const stock = this.stockInputRef.nativeElement.value;
    const active = this.activeInputRef.nativeElement.value;
    const newProduct = new Product(id, name, category, price, stock, active);
    console.log(newProduct);
  }
}
