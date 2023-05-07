import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 @Injectable({
  providedIn: 'root'
})


export class AuthService {
  //private apiUrl = 'http://192.168.77.78:9912/api/user';
  private apiUrl = 'http://localhost:9912/api/user';
  constructor(private http: HttpClient) { }

  signup(user:any):Observable<any>
  {return this.http.post(`${this.apiUrl}/signup`,user);}

  update(username: string,user:any):Observable<any>
  {return this.http.put(`${this.apiUrl}/update/${username}`,user);}

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
  getUser(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/get/${username}`);
  }
}
