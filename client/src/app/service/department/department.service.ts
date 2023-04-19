
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl: string = 'http://localhost:5000/api/department';
  constructor(private httpClient: HttpClient) { }
  getDept() {
    return this.httpClient.get(`${this.baseUrl}`);
  }
  deleteDept(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
