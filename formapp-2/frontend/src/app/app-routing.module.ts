import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'inquiries',
    loadChildren: () =>
      import('./inquiries/inquiries.module').then((m) => m.InquiriesModule),
  },
  {
    path: 'addinquiry',
    loadChildren: () =>
      import('./addinquiry/addinquiry.module').then((m) => m.AddinquiryModule),
  },
  {
    path: 'contacted',
    loadChildren: () =>
      import('./contacted/contacted.module').then((m) => m.ContactedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
