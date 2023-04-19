import { Component } from '@angular/core';
import { StaffsService } from 'src/app/service/staff/staffs.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  staff: any;
  constructor(private staffService: StaffsService) {

  }
  ngOnInit(): void {
    this.staffService.getStaff().subscribe((data) => {
      this.staff = data;
    });
  }
  onDeleteClick(id: string) {
    this.staffService.deleteStaff(id).subscribe(() => this.staffService.getStaff().subscribe((data) => {
      this.staff = data;
    }));
    console.log(id);
  }

}
