import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersComponent } from './suppliers/suppliers.component'
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/common/http';
// import { HttpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SuppliersComponent,
    SupplierDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatButtonModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    BrowserAnimationsModule,
    HttpClientModule
    // HttpModule
  ]
})
export class SupplierModule { }
