import { Injectable } from '@angular/core';
import { Supplier } from './supplier';
import { SUPPLIERS } from './mock-suppliers';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  suppliersUrl = 'http://localhost:3030/suppliers?%24limit=500';

  getSuppliersFromUrl() {
    return this.http.get(this.suppliersUrl);
  }

  getSuppliers(): Observable<Supplier[]> {
    return of(SUPPLIERS);
  }

  constructor(private http: HttpClient) { }
}
