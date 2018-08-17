import { Component, OnInit } from '@angular/core';

//service 
import {StaffService} from './../../staff.service'

//model
import {Staff} from './../../../../../model/staff.class'

@Component({
  selector: 'app-staff-list-add',
  templateUrl: './staff-list-add.component.html',
  styleUrls: ['./staff-list-add.component.scss']
})
export class StaffListAddComponent implements OnInit {

	public list : Staff[] = [];

  constructor(
  	private staffService: StaffService
  	) { 
  	this.list = this.staffService.getAllList();
  }

  ngOnInit() {
    
  }

  addStaff(code:string, name:string, gender:number, birthday:string,phone:string,
  	email:string,degree:string, state:number, address: string, temporary: string, 
    passportNumber: number, dateOfIssue: string, placeOfIssue: string, atmNumber: number,
    taxCode: number, position: string, startProbation: string, endProbation: string,
    startWorking: string, endWorking: string){
  	let staff = new Staff(null,code,name,gender,birthday,phone,email,degree,state,address,temporary,
                    passportNumber,dateOfIssue,placeOfIssue,atmNumber,taxCode,position,startProbation,
                    endProbation,startWorking,endWorking);
  	this.staffService.addStaff(staff);
  }
}
