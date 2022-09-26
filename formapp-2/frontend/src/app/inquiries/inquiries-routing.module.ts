import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquiriesComponent } from './inquiries.component';

const routes: Routes = [{ path: '', component: InquiriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquiriesRoutingModule { }
