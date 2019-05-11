import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-invoice-position-form',
  templateUrl: './invoice-position-form.component.html',
  styleUrls: ['./invoice-position-form.component.sass']
})
export class InvoicePositionFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  invoicePosition = {
    grossPrice: 10.8,
    price: 10,
    tax: 8,
    description: 'jabol'
  };

  calcGross(price:number, tax:number):number
  {
    return price + price * tax / 100;
  }

  changeGrossPrice()
  {
    this.invoicePosition.grossPrice = this.calcGross(this.invoicePosition.price, this.invoicePosition.tax);
  }
}
