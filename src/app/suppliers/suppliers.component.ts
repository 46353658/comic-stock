import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier';
//import { SUPPLIERS } from '../mock-suppliers'; <-- Components should not be responsible for getting this, should be provided by a service
import { SupplierService } from '../supplier.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  // suppliers = SUPPLIERS; <-- Components should not be responsible for getting this, should be provided by a service
  suppliers: Supplier[];

  selectedSupplier: Supplier;

  returnVar: Observable<any>;

  // Without 'Observable' and 'of'
  // getSuppliers(): void {
  //   this.suppliers = this.supplierService.getSuppliers();
  // }

  getSuppliers(): void {
    // console.log('getSuppliers async method');
    this.supplierService.getSuppliers()
      .subscribe(suppliers => this.suppliers = suppliers);
  }

  getSuppliersFromUrl(): void {
    this.supplierService.getSuppliersFromUrl()
      .subscribe((res) => { 
        console.log("res: " + res);
      });
  }

  onSelect(supplier: Supplier): void {
    this.selectedSupplier = supplier;
  }

  constructor(private supplierService: SupplierService) { }

  ngOnInit() {
    // this.getSuppliers();
    this.getSuppliersFromUrl();
  }

}
