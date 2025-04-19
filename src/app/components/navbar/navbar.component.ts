import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Service/AuthService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
  }

  Logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

}
