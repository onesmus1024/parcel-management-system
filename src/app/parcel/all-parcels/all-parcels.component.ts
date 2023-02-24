import { Component } from '@angular/core';
import { ParcelModel } from 'src/app/shared/model/parcel.model';
import { ParcelService } from 'src/app/shared/services/parcel.service';

@Component({
  selector: 'app-all-parcels',
  templateUrl: './all-parcels.component.html',
  styleUrls: ['./all-parcels.component.css']
})
export class AllParcelsComponent {

  parcels: ParcelModel[] = [];

  constructor(private ParcelService:ParcelService) { }

  ngOnInit(): void {
    this.parcels = this.ParcelService.getAllParcels();
  }
  
  

}
