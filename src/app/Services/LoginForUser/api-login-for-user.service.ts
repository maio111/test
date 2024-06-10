import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginForUserService {
  private apiUrl = '/API/login/'; // Use relative URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = { username, password };
    console.log('Sending login request to API with body:', body);
    return this.http.post(this.apiUrl, body, { headers });
  }
}
 
