import { Injectable } from '@angular/core';
import { Supplier } from './supplier';
import { SUPPLIERS } from './mock-suppliers';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  // done without 'Observable' and 'of'
  // getSuppliers(): Supplier[] {
  //   return SUPPLIERS;
  // }

  suppliersUrl = 'http://localhost:3030/suppliers';

  getSuppliersFromUrl() {
    return this.http.get(this.suppliersUrl);
  }

  // done with 'Observable' and 'of'
  getSuppliers(): Observable<Supplier[]> {
    return of(SUPPLIERS);
  }

  constructor(private http: HttpClient) { }
}
