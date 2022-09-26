import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InquiriesRoutingModule } from './inquiries-routing.module';
import { InquiriesComponent } from './inquiries.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    InquiriesComponent
  ],
  imports: [
    CommonModule,
    InquiriesRoutingModule,
    MaterialModule 
  ]
})
export class InquiriesModule { }
