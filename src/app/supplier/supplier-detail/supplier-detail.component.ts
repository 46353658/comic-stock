import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { Subscription } from 'rxjs';
// changeDetection: ChangeDetectionStrategy.OnPush

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent implements OnInit, OnDestroy {

  supplier: Supplier;
  selectedSupplierId: String;
  getSupplierDetailSubscription: Subscription;
  saveSupplierDetailSubscription: Subscription;
  deleteSupplierSubscription: Subscription;

  constructor(
    private supplierService: SupplierService,
    private location: Location, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedSupplierId = params.id;
    });

    if (this.selectedSupplierId) {
      this.getSupplierFromUrl();  
    }
  }

  ngOnDestroy() : void {
    this.getSupplierDetailSubscription
      .unsubscribe();
    // this.saveSupplierDetailSubscription
    //   .unsubscribe();
  }

  getSupplierFromUrl(): void {
    this.getSupplierDetailSubscription = 
        this.supplierService.getSupplierFromUrl(this.selectedSupplierId)
          .subscribe((supplier: Supplier) => {
            this.supplier = supplier;
          });  
  }

  save(): void { 
    this.saveSupplierDetailSubscription = this.supplierService.updateSupplier(this.supplier)
      .subscribe(() => this.goBack());
  }

  deleteSupplier(): void {
    this.deleteSupplierSubscription = this.supplierService.deleteSupplier(this.supplier)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.router.navigate([`/suppliers`]);
  }

  updateSuppliersVariable(): void {  }
}
