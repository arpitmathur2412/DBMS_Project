
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WingService {
  baseUrl: string = 'http://localhost:5000/api/wing';
  constructor(private httpClient: HttpClient) { }
  getWing() {
    return this.httpClient.get(`${this.baseUrl}`);
  }
  deleteWing(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
