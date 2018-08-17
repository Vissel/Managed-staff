import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router'

//services
import {StaffService} from './../staff.service'

//model
import {Staff} from './../../../../model/staff.class'

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
	public list : Staff[] = [];
  public staff : Staff = null;

  public isDisplay : boolean ;
  
  constructor(
  	public staffService: StaffService,
    public routerService: Router
  	) { 
		
  }

  ngOnInit() {
	this.list = this.staffService.getAllList()
	// console.log(this.list)
  }
   
   

}
