import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Supplier } from '../../supplier';
import { SupplierService } from '../../supplier.service';
import { Location } from '@angular/common';
import { SuppliersComponent } from '../suppliers.component';
// changeDetection: ChangeDetectionStrategy.OnPush

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent implements OnInit {

  @Input() supplier: Supplier;

  constructor(
    private supplierService: SupplierService,
    private location: Location,
    private suppliersComponent: SuppliersComponent) { }

  ngOnInit() {
  }

  save(): void {
    this.supplierService.updateSupplier(this.supplier) 
      .subscribe(() => this.updateSuppliersVariable());
    // window.location.reload();
  }

  goBack(): void {
    this.location.go('/suppliers');
  }

  updateSuppliersVariable() : void {
    this.suppliersComponent.selectedSupplier = null;
  }

}
