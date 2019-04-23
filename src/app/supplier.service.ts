import { Injectable } from '@angular/core';
import { Supplier } from './supplier';
import { SUPPLIERS } from './mock-suppliers';
import { Observable, of, ObservableInput } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  suppliersUrl = 'http://localhost:3030/suppliers/';

  getSuppliersFromUrl() {
    return this.http.get(`${this.suppliersUrl}?%24limit=500`);
  }

  getSuppliers(): Observable<Supplier[]> {
    return of(SUPPLIERS);
  }

  deleteSupplier (supplier: Supplier): Observable<any> {
    console.log(`deleteSupplier: ${supplier._id}`);

    return this.http.delete(`${this.suppliersUrl}${supplier._id}`).pipe(
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

    return this.http.put(`${this.suppliersUrl}${supplier._id}`, updateObject, httpOptions).pipe(
      tap(_ => console.log(`updated supplier id=${supplier._id}`)),
      catchError(this.handleError<any>('updateSupplier'))
    );
  }

  addSupplier(addSupplier: any): Observable<any> {

    return this.http.post(`http://localhost:3030/suppliers`, addSupplier, httpOptions).pipe(
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

  constructor(private http: HttpClient) { }
}
