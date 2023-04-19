
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UnallocService {
  baseUrl: string = 'http://localhost:5000/api/unallocated_room';
  constructor(private httpClient: HttpClient) { }
  getUnalloc() {
    return this.httpClient.get(`${this.baseUrl}`);
  }
  deleteUnalloc(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
