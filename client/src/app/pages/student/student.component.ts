import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/service/student/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students: any;
  constructor(private studentService: StudentsService) {

  }
  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }
  onDeleteClick(id: string) {
    this.studentService.deleteStudents(id).subscribe(() => this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    }));
    console.log(id);
  }
  onAddClick() {

  }
}
