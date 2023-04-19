import { Component } from '@angular/core';
import { DepartmentService } from 'src/app/service/department/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  dept: any;
  constructor(private deptService: DepartmentService) {

  }
  ngOnInit(): void {
    this.deptService.getDept().subscribe((data) => {
      this.dept = data;
    });
  }
  onDeleteClick(id: string) {
    this.deptService.deleteDept(id).subscribe(() => this.deptService.getDept().subscribe((data) => {
      this.dept = data;
    }));
    console.log(id);
  }

}
