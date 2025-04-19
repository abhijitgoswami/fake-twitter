
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasUser());

  // Observable so components can subscribe
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor() {}

  login(username: string) {
    localStorage.setItem('user', username);
    this.loggedIn.next(true); // notify subscribers
  }

  logout() {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
  }

  private hasUser(): boolean {
    return !!localStorage.getItem('user');
  }
}
