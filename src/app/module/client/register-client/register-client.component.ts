import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/controller/model/User.model';
import { AuthService } from 'src/app/controller/service/Auth.service';
import {Role} from '../../../controller/model/Role.model';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent implements OnInit {
  registerForm = new FormGroup({
    prenom : new FormControl('', Validators.required),
    nom : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    userName : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  submit(){
    const formValues = this.registerForm.value;
    const {prenom, nom, userName, password, email} = formValues;
    const role = new Role();
    role.authority = 'ROLE_Client' ;
    this.user.prenom = prenom;
    this.user.nom = nom;
    this.user.username = userName;
    this.user.password = password;
    this.user.email = email;
    this.user.roles = [role] ;
    this.authService.registerClient();

  }
    get user(): User {
        return this.authService.user;
    }

    set user(value: User) {
        this.authService.user = value;
    }

}
