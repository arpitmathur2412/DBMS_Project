

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WardensService {
  baseUrl: string = 'http://localhost:5000/api/warden';
  constructor(private httpClient: HttpClient) { }
  getWardens() {
    return this.httpClient.get(`${this.baseUrl}`);
  }
  deleteWarden(id: string) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
}
