import { Component, OnInit } from '@angular/core';
import { SalesPerson } from '../model/SalesPerson';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.scss']
})
export class SalesPersonListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup@gmail.com", 5000),
    new SalesPerson("John", "Kumar", "ajohn@gmail.com", 6000),
    new SalesPerson("Claire", "Kumar", "claire@gmail.com", 7000),
    new SalesPerson("Mai", "Kumar", "mai@gmail.com", 8000)
  ]

}
