import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})

export class NewOfferPage implements OnInit {
  newOfferFrmGrp!: FormGroup; //using the definite assingment assertion operator
  minStrtDt = new Date().toISOString;
  maxEndDt = new Date("2024-03-31").toISOString();
  dateTime: string | undefined;

  constructor() {
    this.newOfferFrmGrp = new FormGroup({
      title : new FormControl('',[Validators.required,Validators.maxLength(60)]),
      desc: new FormControl('',[Validators.required,Validators.maxLength(200)]),
      price: new FormControl('',[Validators.required,Validators.min(100),Validators.max(10000)]),
      startDt: new FormControl('', [Validators.required])
    });
  }
  ngOnInit() {
    //creating a form group with all the form control
    this.newOfferFrmGrp.controls['startDt'].patchValue(new Date().toISOString());

  }
}
