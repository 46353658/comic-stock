import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesComponent } from '../issue/issues/issues.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    IssuesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class IssueModule { }
