import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  baseUrl: string = 'http://localhost:5000/api/student';
  constructor(private httpClient: HttpClient) { }
  getStudents() {
    return this.httpClient.get(`${this.baseUrl}`);
  }
  deleteStudents(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

}
