import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier';
import { SUPPLIERS } from '../mock-suppliers';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers = SUPPLIERS;

  // supplier: Supplier = {
  //   id: "1kqLWNNIWJVK42oN",
  //   name: "Unerazz",
  //   city: "Virginia Beach",
  //   reference: "R9F3R5XWZ1R56KI",
  //   status: "Active"
  // };

  selectedSupplier: Supplier;

  onSelect(supplier: Supplier): void {
    this.selectedSupplier = supplier;
  }

  constructor() { }

  ngOnInit() {
  }

}
