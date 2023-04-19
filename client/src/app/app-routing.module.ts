import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './pages/student/student.component';
import { AllocatedRoomComponent } from './pages/allocated-room/allocated-room.component';
import { UnallocatedRoomComponent } from './pages/unallocated-room/unallocated-room.component';
import { DepartmentComponent } from './pages/department/department.component';
import { WardenComponent } from './pages/warden/warden.component';
import { StaffComponent } from './pages/staff/staff.component';
import { WingComponent } from './pages/wing/wing.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: 'student',
    component: StudentComponent

  },
  {
    path: '',
    component: MainComponent

  },
  {
    path: 'alloc_rooms',
    component: AllocatedRoomComponent
  },
  {
    path: 'unalloc_rooms',
    component: UnallocatedRoomComponent
  },
  {
    path: 'department',
    component: DepartmentComponent
  },
  {
    path: 'warden',
    component: WardenComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'wing',
    component: WingComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
