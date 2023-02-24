import { Component, Input } from '@angular/core';
import { ParcelModel } from 'src/app/shared/model/parcel.model';

@Component({
  selector: 'app-single-parcel',
  templateUrl: './single-parcel.component.html',
  styleUrls: ['./single-parcel.component.css']
})
export class SingleParcelComponent {
  
  @Input() parcel:ParcelModel = new ParcelModel('','','');

  constructor() { }


}
