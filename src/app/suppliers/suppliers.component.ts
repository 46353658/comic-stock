import { Component, OnInit, OnDestroy } from '@angular/core';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { Observable, Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})

export class SuppliersComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    this.supplierServiceSubscription
      .unsubscribe();
  }

  public popOverTitle: string = 'Sure?';

  suppliers: Supplier[];

  p: number = 1;

  selectedSupplier: Supplier;

  response: any;

  // create an array and then destroy all elements
  supplierServiceSubscription: Subscription;

  ngOnInit() {
    this.getSuppliersFromUrl();
  }

  constructor(private supplierService: SupplierService,
    private location: Location) { }

  // old  
  // deleteSupplier(supplier: Supplier): void {
  //   this.supplierService.deleteSupplier(supplier)
  //     .subscribe(() => this.goBack());
  // }

  deleteSupplier(supplier: Supplier): void {
    this.supplierServiceSubscription = this.supplierService.deleteSupplier(supplier)
      .subscribe(() => this.goBack())
  }

  getSuppliersFromUrl(): void {
    this.supplierServiceSubscription = this.supplierService.getSuppliersFromUrl()
      .subscribe({
        next: (suppliers: any) => {
          this.suppliers = suppliers.data;
        }
      });
  }

  //old
  // getSuppliersFromUrl(): void {
  //   this.supplierService.getSuppliersFromUrl()
  //     .subscribe({
  //       next: (suppliers: any) => {
  //         this.suppliers = suppliers.data;
  //       }
  //     });
  // }

  goBack(): void {
    this.location.back();
  }

  onSelect(supplier: Supplier): void {
    this.selectedSupplier = supplier;
  }

  addSupplier(supplierName: string, supplierCity: string, supplierReference: string): void {
    
    supplierName = supplierName.trim();
    supplierCity = supplierCity.trim();
    supplierReference = supplierReference.trim();

    if (!supplierName || !supplierCity || !supplierReference) {
      return;
    }

    this.supplierServiceSubscription = this.supplierService.addSupplier( {
      name: supplierName,
      city: supplierCity,
      reference: supplierReference
    } ) 
      .subscribe(supplier => {
        this.suppliers.push(supplier);
      });

  // old
  // this.supplierService.addSupplier( {
  //   name: supplierName,
  //   city: supplierCity,
  //   reference: supplierReference
  // } ) 
  //   .subscribe(supplier => {
  //     this.suppliers.push(supplier);
  //   });
        
  }
}
