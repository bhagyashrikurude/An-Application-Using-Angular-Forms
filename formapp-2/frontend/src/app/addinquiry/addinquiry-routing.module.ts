import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddinquiryComponent } from './addinquiry.component';

const routes: Routes = [{ path: '', component: AddinquiryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddinquiryRoutingModule { }
