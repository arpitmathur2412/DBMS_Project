import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './pages/student/student.component';
import { WingComponent } from './pages/wing/wing.component';

import { WardenComponent } from './pages/warden/warden.component';
import { DepartmentComponent } from './pages/department/department.component';
import { StaffComponent } from './pages/staff/staff.component';
import { UnallocatedRoomComponent } from './pages/unallocated-room/unallocated-room.component';
import { AllocatedRoomComponent } from './pages/allocated-room/allocated-room.component';
import { MainComponent } from './pages/main/main.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    WingComponent,

    WardenComponent,
    DepartmentComponent,
    StaffComponent,
    UnallocatedRoomComponent,
    AllocatedRoomComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
