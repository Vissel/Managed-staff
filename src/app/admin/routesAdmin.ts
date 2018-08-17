import { Routes } from '@angular/router';
import { AdminComponentComponent } from './admin-component/admin-component.component'
import { ManagedConfigComponent } from './component/managed-config/managed-config.component'
import { ManagedNotificationComponent } from './component/managed-notification/managed-notification.component'
import {ManagedProjectComponent } from './component/managed-project/managed-project.component'
import { ManagedStaffComponent } from './component/managed-staff/managed-staff.component';
import { ManagedTimesheetComponent } from './component/managed-timesheet/managed-timesheet.component';
import { ManagedSalaryComponent } from './component/managed-salary/managed-salary.component';
import { HomePageComponent } from './component/home-page/home-page.component';
// import { StaffInforComponent } from './component/managed-staff/staff-infor/staff-infor.component';
import { CvInforComponent } from './component/managed-staff/cv-infor/cv-infor.component';
import { LoginGuard } from './../AdminLogin.guard';

//thach - component
import {StaffListComponent} from './component/managed-staff/staff-list/staff-list.component'
import {StaffListDetailComponent} from './component/managed-staff/staff-list/staff-list-detail/staff-list-detail.component'
import {StaffListAddComponent} from './component/managed-staff/staff-list/staff-list-add/staff-list-add.component'

export const routesAdmin: Routes = [
    {
        path: 'admin',
        component: AdminComponentComponent,
        canActivate:[LoginGuard],
        children: [

            {
                path: '',
                component: AdminComponentComponent,
                children: [
                    {
                        path: 'config',
                        component: ManagedConfigComponent
                    },
                    {
                        path: 'notification',
                        component: ManagedNotificationComponent
                    },
                    {
                        path: 'project',
                        component: ManagedProjectComponent
                    },
                    {
                        path: 'staff',
                        component: ManagedStaffComponent,
                        children:[
                            {
                                path:'',
                                redirectTo:'staff-list',
                                pathMatch:'full',
                            },
                            {
                                path: 'staff-list',
                                component:StaffListComponent
                            },
                            {
                                path:'staff-list-add',
                                component:StaffListAddComponent,
                            },
                            {
                                path:'cv-infor',
                                component: CvInforComponent
                            },
                            {
                                path:':id',
                                component: StaffListDetailComponent
                            },
                            
                            
                        ]
                    },
                    {
                        path: 'timesheet',
                        component: ManagedTimesheetComponent
                    },
                    {
                        path: 'salary',
                        component: ManagedSalaryComponent
                    },
                    {
                        path: 'index',
                        component: HomePageComponent
                    },
                    
                    
                ]
            },

        ]
    }
]

