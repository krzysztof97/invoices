import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoice';
  name:string = 'Krzysiek';
  counter:number = 0;
  getResult(a:number, b:number):number {
    return a+b;
  }
  constructor() {
    setInterval(() => {
      this.counter++;
    },500);
  }
}
