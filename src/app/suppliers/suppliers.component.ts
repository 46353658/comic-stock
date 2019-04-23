import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  public popOverTitle: string = 'Sure?';

  suppliers: Supplier[];

  p: number = 1;

  selectedSupplier: Supplier;

  response: any;

  deleteSupplier(supplier: Supplier): void {
    this.supplierService.deleteSupplier(supplier)
      .subscribe(() => this.goBack());
  }

  getSuppliersFromUrl(): void {
    this.supplierService.getSuppliersFromUrl()
      .subscribe({
        next: (suppliers: any) => {
          this.suppliers = suppliers.data;
        }
      });
  }

  goBack(): void {
    this.location.back();
  }

  onSelect(supplier: Supplier): void {
    this.selectedSupplier = supplier;
  }

  constructor(private supplierService: SupplierService,
    private location: Location) { }

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
