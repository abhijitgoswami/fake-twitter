import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = 'https://localhost:7104/api/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.baseURL + 'User/getUsers');
  }
  
  getUser(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'User/getUserByEmail?email=' + userName);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get(this.baseURL + 'User/getUserById?id=' + userId);
  }

  //need to update
  addUser(user: User): Observable<any> {
    return this.http.post<User>(this.baseURL + 'Users', user);
  }
}
