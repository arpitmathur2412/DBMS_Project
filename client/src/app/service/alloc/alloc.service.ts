
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AllocService {
  baseUrl: string = 'http://localhost:5000/api/allocated_room';
  constructor(private httpClient: HttpClient) { }
  getAlloc() {
    return this.httpClient.get(`${this.baseUrl}`);
  }
  deleteAlloc(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
