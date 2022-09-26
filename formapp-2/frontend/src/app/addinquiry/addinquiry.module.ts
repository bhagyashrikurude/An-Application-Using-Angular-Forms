import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddinquiryRoutingModule } from './addinquiry-routing.module';
import { AddinquiryComponent } from './addinquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddinquiryComponent],
  imports: [
    CommonModule,
    AddinquiryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AddinquiryModule {}
