import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/Service/AuthService';
import { DataService } from 'src/app/Service/DataService';
import { User } from 'src/Model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbModalConfig, NgbModal, NgbActiveModal]
})
export class LoginComponent implements OnInit {

	loginForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl(''),
	});

	constructor(config: NgbModalConfig,
		private modalService: NgbModal,
		public activeModal: NgbActiveModal,
		private authService: AuthService, private dataService: DataService) {
		// customize default values of modals used by this component tree
	}

	open(content: any) {
		this.modalService.open(content);
	}

	onSubmit() {
		this.dataService.getUsers().subscribe(users => {
			const user = users.find((user: any) => user.email === this.loginForm.value.email);
			if (user) {
				this.authService.login(user.email);
			}
			else {
				alert('Invalid email or password');
			}
		});
		this.activeModal.close();
	}

	ngOnInit(): void {
	}

}
