import { 
  Component,
  OnInit, 
  OnDestroy,
  OnChanges,
} from '@angular/core'

import { Router, ActivatedRoute } from '@angular/router'

//services
import { Subscription, Observable } from 'rxjs';
import { HttpGetService } from './../../../../Http-Services/http-get.service'
import {HttpDeleteService} from './../../../../Http-Services/http-delete.service'
//model
import { Staff } from './../../../../model/staff.class'

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit, OnDestroy, OnChanges {
  public staff: Staff = null;

  public isDisplay: boolean;
  public subscription: Subscription;
  public listStaff: Staff[] = [];
  // public api: string = "http://192.168.0.108:9999/test/getAll"";
  public api: string = "http://5b7e8109adf2070014bfa375.mockapi.io/Staff";

  constructor(

    public routerService: Router,
    public httpGet: HttpGetService,
    public httpDelete : HttpDeleteService,
  ) {

  }

  ngOnInit() {
    return this.getData();
  }

  ngOnChanges(){
  }

/*----------- Load du lieu len man hinh -----------*/
  getData() {
    // console.log('start ...');
    this.subscription = this.httpGet.getAll(this.api).subscribe(data => {
      this.listStaff = data.body;
      // console.log(this.listStaff);
    })
    // console.log('subscription '+this.subcription)
  }

/*-----------Xoa du lieu -----------*/
onDeleteStaff(id: number){
  this.subscription = this.httpDelete.delete(id,this.api).subscribe((data : Staff) => {
    this.updateStaffAfterDelete(id)
  })
}

updateStaffAfterDelete(id: number){
  for(var i = 0; i < this.listStaff.length; i++){
    if(this.listStaff[i].id == id){
      this.listStaff.splice(i,1);
      this.updateStaffAfterDelete(id)
    }
  }
}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
