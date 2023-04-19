

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StaffsService {
  baseUrl: string = 'http://localhost:5000/api/staff';
  constructor(private httpClient: HttpClient) { }
  getStaff() {
    return this.httpClient.get(`${this.baseUrl}`);
  }
  deleteStaff(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
