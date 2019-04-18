import { Injectable } from '@angular/core';
import { Supplier } from './supplier';
import { SUPPLIERS } from './mock-suppliers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  // done without 'Observable' and 'of'
  // getSuppliers(): Supplier[] {
  //   return SUPPLIERS;
  // }

  // done with 'Observable' and 'of'
  getSuppliers(): Observable<Supplier[]> {
    return of(SUPPLIERS);
  }

  constructor() { }
}
