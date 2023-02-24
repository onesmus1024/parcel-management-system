import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'parcel', pathMatch: 'full' },
  { path: 'parcel', loadChildren: () => import('./parcel/parcel.module').then(m => m.ParcelModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
