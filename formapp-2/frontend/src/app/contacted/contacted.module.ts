import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactedRoutingModule } from './contacted-routing.module';
import { ContactedComponent } from './contacted.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ContactedComponent
  ],
  imports: [
    CommonModule,
    ContactedRoutingModule,
    MaterialModule
  ]
})
export class ContactedModule { }
