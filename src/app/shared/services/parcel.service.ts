import { Injectable } from '@angular/core';
import { ParcelModel } from '../model/parcel.model';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  parcels: ParcelModel[] = [
    new ParcelModel('John', 'john@gmail.com', 'USA'),
    new ParcelModel('Jane', 'jane@gmail.com', 'UK'),
  ]
  constructor() { }

  addParcel(parcel: ParcelModel) {
    this.parcels.push(parcel);
  }

  getAllParcels() {
    return this.parcels;
  }

  getParcelById(id: number) {
    return this.parcels.find(parcel => parcel.id === id);
  }

  updateParcel(parcel: ParcelModel) {
    const index = this.parcels.findIndex(p => p.id === parcel.id);
    this.parcels[index] = parcel;
  }

  deleteParcel(id: number) {
    const index = this.parcels.findIndex(p => p.id === id);
    this.parcels.splice(index, 1);
  }



}
