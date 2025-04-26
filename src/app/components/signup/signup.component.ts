import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/Service/UserService';
import { User } from 'src/Model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [NgbModalConfig, NgbModal, NgbActiveModal, UserService]
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(config: NgbModalConfig,
      private modalService: NgbModal,
      public activeModal: NgbActiveModal,
      private userService: UserService) {
      // customize default values of modals used by this component tree
    }

  ngOnInit(): void {
  }

  open(content: any) {
		this.modalService.open(content);
	}

  onSubmit(){
    const newUser: User = {
      id: 1,
      firstName: this.signupForm.value.firstName ?? '',
      lastName: this.signupForm.value.lastName ?? '',
      mobile: Number(this.signupForm.value.mobile) ?? 0,
      email: this.signupForm.value.email ?? '',
      password: this.signupForm.value.password ?? '',
      roleId: 0
    };

    this.userService.addUser(newUser).subscribe(
      response => {
        console.log('User added successfully:', response);
        alert('User added successfully');
      });

    this.activeModal.close();
  }
}
