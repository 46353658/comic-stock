import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersComponent } from './supplier/suppliers/suppliers.component';
import { IssuesComponent } from './issues/issues.component';

const routes: Routes = [
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'issues', component: IssuesComponent },
  { path: '', redirectTo: '/suppliers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
