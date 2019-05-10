import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersComponent } from './supplier/suppliers/suppliers.component';
import { SupplierDetailComponent } from './supplier/supplier-detail/supplier-detail.component';
import { IssuesComponent } from './issue/issues/issues.component';

const routes: Routes = [
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'supplier-detail/:id', component: SupplierDetailComponent},
  { path: '', redirectTo: '/suppliers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
