import { Injectable } from '@angular/core';
import { Supplier } from './supplier';
import { SUPPLIERS } from './mock-suppliers';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  getSuppliers(): Supplier[] {
    return SUPPLIERS;
    // return [
    //   { id: "1kqLWNNIWJVK42oN", name: "Unerazz2", city: "Virginia Beach", reference: "R9F3R5XWZ1R56KI", status: "Active" },
    //   { id: "4AWTVTCAcJ6xBveB", name: "Thrurobover2  ", city: "Newark", reference: "GU11TUE4YHA9YLY", status: "Active"},
    //   { id: "ABnPOk4nwjgumJqD", name: "Lomfropexica2tor Holdings Group", city: "Newark", reference: "S1CNWIPS2BWFR80", status: "Active"},
    // ];
  }

  constructor() { }
}
