import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private apiUrl = 'http://localhost:9912/api/user';

  constructor(private http: HttpClient) { }

  signup(user:any):Observable<any>
  {return this.http.post(`${this.apiUrl}/signup`,user);}

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

}
