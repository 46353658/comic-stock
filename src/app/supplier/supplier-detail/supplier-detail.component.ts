import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private supplierService: SupplierService,
    private location: Location, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params);
      // console.log(`params.id: ${params.id}`);
      this.selectedSupplierId = params.id;
    });

    if (this.selectedSupplierId) {
      this.getSupplierFromUrl();  
    }
  }

  ngOnDestroy() : void {
    this.getSupplierDetailSubscription
      .unsubscribe();
  }

  getSupplierFromUrl(): void {
    console.log(`... ${this.selectedSupplierId}`);
    this.getSupplierDetailSubscription = 
        this.supplierService.getSupplierFromUrl(this.selectedSupplierId)
          .subscribe((supplier: Supplier) => {
            console.log(`supplier.data: ${JSON.stringify(supplier)}`);
            this.supplier = supplier;
            console.log(`this.supplier: ${this.supplier.reference}`);
          });
            
    // this.getSupplierDetailSubscription = 
    //   this.supplierService.getSupplierFromUrl(this.selectedSupplierId)
    //         .subscribe({
    //           next: (supplier: any) => {
    //             this.supplier = supplier.data;
    //             console.log(`in subscription ${this.supplier.name}`);
    //           }
    //         });  
  }

  save(): void {
    // this.supplierService.updateSupplier(this.supplier) 
    //   .subscribe(() => this.updateSuppliersVariable());
    // window.location.reload();
  }

  goBack(): void {
    this.location.go('/suppliers');
  }

  updateSuppliersVariable() : void {
  }

}
