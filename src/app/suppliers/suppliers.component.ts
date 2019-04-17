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

  selectedSupplier: Supplier;

  onSelect(supplier: Supplier): void {
    this.selectedSupplier = supplier;
  }

  constructor() { }

  ngOnInit() {
  }

}
