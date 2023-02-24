import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllParcelsComponent } from './all-parcels/all-parcels.component';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { FormsModule } from '@angular/forms';
import { SingleParcelComponent } from './single-parcel/single-parcel.component';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuardService } from '../shared/guards/can-activate-guard.service';

// create routes
const routes: Routes = [
  { path: '', component: AllParcelsComponent, canActivate: [CanActivateGuardService] },
  { path: 'addparcel', component: AddParcelComponent, canActivate: [CanActivateGuardService] },
];



@NgModule({
  declarations: [
    AllParcelsComponent,
    AllParcelsComponent,
    AddParcelComponent,
    SingleParcelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]

})
export class ParcelModule { }
