import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer = { id : 1, name : "rohit", age : 25 };
  constructor() { }

  ngOnInit() {
  }

}
