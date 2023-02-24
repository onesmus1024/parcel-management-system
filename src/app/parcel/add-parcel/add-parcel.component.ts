import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ParcelModel } from 'src/app/shared/model/parcel.model';
import { ParcelService } from 'src/app/shared/services/parcel.service';

@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['./add-parcel.component.css']
})
export class AddParcelComponent {
  errorMessage:string = '';
  @ViewChild('addParcelForm') form: NgForm | undefined;

  constructor(private ParcelService:ParcelService,private router:Router) { }

  onSubmit() {
    if(this.form?.invalid){
      this.errorMessage = 'Please fill all the fields';
      return;
    }
    const parcel = new ParcelModel(this.form?.value.name,this.form?.value.email,this.form?.value.destination);
    console.log(parcel);
    this.ParcelService.addParcel(parcel);
    console.log(this.form);
    this.form?.reset();
    this.router.navigate(['/']);
  }



}
