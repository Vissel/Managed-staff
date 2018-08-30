import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Router, RouterModule, Routes } from '@angular/router'
import { Subscription, Observable } from 'rxjs'
//service 
import { StaffService } from './../../staff.service'
import { HttpPostService } from './../../../../../Http-Services/http-post.service'

//model
import { Staff } from './../../../../../model/staff.class'

//validate
import {
  nameValidate,
  dateValidate,
  phoneValidate,
  passportNumberValidate,
  emailValidate,
  atmNumberValidate,
} from './../validation'

@Component({
  selector: 'app-staff-list-add',
  templateUrl: './staff-list-add.component.html',
  styleUrls: ['./staff-list-add.component.scss']
})
export class StaffListAddComponent implements OnInit {

	public list: Staff[] = [];

  public subscription: Subscription;
  public staff: Staff = null;

  public api: string = "http://5b7e8109adf2070014bfa375.mockapi.io/Staff";
  
  //validate
  form: FormGroup;
 

  titleAlert: string = 'Thông tin không hợp lệ';

  constructor(
    private fb: FormBuilder,

    private httpPost: HttpPostService,
    private routes: Router,

  ) {

    //validate
    this.form = fb.group({
      'name': [null, nameValidate],
      'code': [null, Validators.required],
      'birthday': [null, dateValidate],
      'gender': [''],
      'phone': [null, phoneValidate],
      'address': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(200)])],
      'temporary': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(200)])],
      'passportNumber': [null, passportNumberValidate],
      'dateOfIssue': [],
      'placeOfIssue': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(200)])],
      'email': [null, emailValidate],
      'atmNumber': [null, atmNumberValidate],
      'taxCode': [''],
      'degree': [''],
      'startProbation': [],
      'endProbation': [],
      'startWorking': [],
      'endWorking': [],
      'position': [''],
      'state': [''],
    })
  }

  ngOnInit() {
  }

  onAddStaff() {
    this.staff=this.form.value;
    this.subscription = this.httpPost.add(this.staff, this.api).subscribe((data: Staff) => {
      this.list.push(data)
      this.routes.navigate(['/admin/staff/staff-list']); // chu y router, neu de ben ngoai thi no se ko thuc hien code trong onAddStaff()
      // console.log(this.list.pop())
    })
    
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
