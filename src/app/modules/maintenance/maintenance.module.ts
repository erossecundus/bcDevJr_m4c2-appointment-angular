import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { AreaPageComponent } from './pages/area-page/area-page.component';
import { ProfessionalPageComponent } from './pages/professional-page/professional-page.component';
import { AppointmentTypePageComponent } from './pages/appointment-type-page/appointment-type-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ClientTablePageComponent } from './pages/client-table-page/client-table-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AreaPageComponent,
    ProfessionalPageComponent,
    AppointmentTypePageComponent,
    UserPageComponent,
    ClientTablePageComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class MaintenanceModule { }
