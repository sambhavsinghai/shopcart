import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shopcart';
  // product: any;
  // constructor(firestore: AngularFirestore) {
  //   this.product = firestore.collection('product').snapshotChanges();
  //   this.product.subscribe((data) => {
  //     console.log(data);

  //     console.log(data[0].payload.doc.data());
  //   });
  // }
}
