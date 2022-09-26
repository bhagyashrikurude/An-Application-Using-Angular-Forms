import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactedComponent } from './contacted.component';

const routes: Routes = [{ path: '', component: ContactedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactedRoutingModule { }
