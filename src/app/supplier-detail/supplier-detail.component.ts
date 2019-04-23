import { Component, OnInit, Input } from '@angular/core';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.css']
})
export class SupplierDetailComponent implements OnInit {

  @Input() supplier: Supplier;

  constructor(private supplierService: SupplierService,
              private location: Location) { }

  ngOnInit() {
  }

  save(): void {
    this.supplierService.updateSupplier(this.supplier) 
      .subscribe(() => this.goBack());
  }

  delete(): void {
    this.supplierService.deleteSupplier(this.supplier)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
