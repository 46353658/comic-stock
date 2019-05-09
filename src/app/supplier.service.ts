import { Injectable } from '@angular/core';
import { Supplier } from './supplier';
// rename to mock-suppliers
import { MOCK_SUPPLIERS } from './mock-suppliers';
import { Observable, of, ObservableInput } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from './../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }
  // // use an environment variable for this
  // suppliersUrl = 'http://localhost:3030/suppliers/';

  // use http.getArgumentList (HttpParams)
  getSuppliersFromUrl() {
    return this.http.get(`${environment.suppliersUrl}${environment.limit500}`);
  }

  getSuppliers(): Observable<Supplier[]> {
    return of(MOCK_SUPPLIERS);
  }

  deleteSupplier (supplier: Supplier): Observable<any> {
    console.log(`deleteSupplier: ${supplier._id}`);

    return this.http.delete(`${environment.suppliersUrl}${supplier._id}`).pipe(
      tap(_ => console.log(`deleted supplier id=${supplier._id}`)),
      catchError(this.handleError<any>('deleteSupplier'))
    );
  }

  updateSupplier (supplier: Supplier): Observable<any> {

    const updateObject = {
      name: supplier.name,
      city: supplier.city,
      reference: supplier.reference
    }

    return this.http.put(`${environment.suppliersUrl}${supplier._id}`, updateObject, httpOptions).pipe(
      tap(_ => console.log(`updated supplier id=${supplier._id}`)),
      catchError(this.handleError<any>('updateSupplier'))
    );
  }

  addSupplier(addSupplier: any): Observable<any> {

    return this.http.post(`${environment.addSupplierUrl}`, addSupplier, httpOptions).pipe(
      tap(_ => console.log(`added supplier`)),
      catchError(this.handleError<any>('addSupplier'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
  
}
