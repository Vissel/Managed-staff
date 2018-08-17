
//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCommonModuleModule } from './../all-common-module/all-common-module.module'
import { RouterModule } from '@angular/router';
//component
import { ManagedConfigComponent } from './component/managed-config/managed-config.component';
import { ManagedNotificationComponent } from './component/managed-notification/managed-notification.component';
import { ManagedProjectComponent } from './component/managed-project/managed-project.component';
import { ManagedStaffComponent } from './component/managed-staff/managed-staff.component';
import { ManagedTimesheetComponent } from './component/managed-timesheet/managed-timesheet.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { routesAdmin } from './routesAdmin';
import { ManagedSalaryComponent } from './component/managed-salary/managed-salary.component';
import { HomePageComponent } from './component/home-page/home-page.component';
// import { StaffInforComponent } from './component/managed-staff/staff-infor/staff-infor.component';
import { CvInforComponent } from './component/managed-staff/cv-infor/cv-infor.component';

//thach - component
import {StaffListComponent} from './component/managed-staff/staff-list/staff-list.component'
import {StaffListDetailComponent} from './component/managed-staff/staff-list/staff-list-detail/staff-list-detail.component'
import {StaffListAddComponent} from './component/managed-staff/staff-list/staff-list-add/staff-list-add.component'

@NgModule({
  imports: [
    CommonModule,
    AllCommonModuleModule,
    RouterModule.forChild(routesAdmin)
   
  ],
  declarations: [
      ManagedConfigComponent,
    ManagedNotificationComponent,
    ManagedProjectComponent,
    ManagedStaffComponent,
    ManagedTimesheetComponent,
    AdminComponentComponent,
    ManagedSalaryComponent,
    HomePageComponent,
    // StaffInforComponent,
    CvInforComponent,

    StaffListComponent, //thach
   StaffListDetailComponent,
   StaffListAddComponent,

    ],
    bootstrap:[AdminComponentComponent],
    exports:[AdminComponentComponent]
})
export class AdminModule { }
