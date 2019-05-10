import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SuppliersComponent } from './suppliers/suppliers.component';
// import { SupplierDetailComponent } from './supplier/supplier-detail/supplier-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { IssuesComponent } from './issue/issues/issues.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
// import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { SupplierModule } from './supplier/supplier.module';

@NgModule({
  declarations: [
    AppComponent,
    // SuppliersComponent,
    // SupplierDetailComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // Ng2SearchPipeModule,
    // NgxPaginationModule,
    MatButtonModule,
    // ConfirmationPopoverModule.forRoot({
    //   confirmButtonType: 'danger'
    // }),
    SupplierModule
  ],
  // providers: [SuppliersComponent],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
