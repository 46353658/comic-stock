import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: Supplier[];

  p: number = 1;

  selectedSupplier: Supplier;

  response: any;

  getSuppliersFromUrl(): void {
    this.supplierService.getSuppliersFromUrl()
      .subscribe({
        next: (suppliers: any) => {
          this.suppliers = suppliers.data;
        }
      });
  }

  onSelect(supplier: Supplier): void {
    this.selectedSupplier = supplier;
  }

  constructor(private supplierService: SupplierService) { }

  ngOnInit() {
    this.getSuppliersFromUrl();
  }

  addSupplier(supplierName: string, supplierCity: string, supplierReference: string): void {
    supplierName = supplierName.trim();
    supplierCity = supplierCity.trim();
    supplierReference = supplierReference.trim();

    if (!supplierName || !supplierCity || !supplierReference) {
      return;
    }

    this.supplierService.addSupplier( {
      name: supplierName,
      city: supplierCity,
      reference: supplierReference
    } ) 
      .subscribe(supplier => {
        this.suppliers.push(supplier);
      });
  
  }

}
