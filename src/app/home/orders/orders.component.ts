import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ORDERS = [
    new Order('Test1', 'test1', '10'),
    new Order('Test2', 'test2d sad asd asd asdas das das das dasd asdas dasd', '20'),
    new Order('Test3', 'test3', '30'),
    new Order('Test3', 'test3', '30'),
    new Order('Test3', 'test3', '30'),
    new Order('Test3', 'test3', '30'),
    new Order('Test3', 'test3', '30'),
  ];

  constructor() { }

  ngOnInit() {
  }

}

export class Order {
  constructor(public name: string, public dinner: string, public price: string) {
  }
}

