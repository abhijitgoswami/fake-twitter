import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showSignUpForm = false;

  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ShowSignUpform(){
    this.showSignUpForm = true;
  }

  onSubmit(){
    console.warn(typeof(this.signupForm.value.firstName));
  }

}
