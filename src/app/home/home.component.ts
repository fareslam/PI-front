import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  username: string;
  password: string;
  cin: number;
  username2: string;
  password2: string;
  repassword2: string;
  tel: number;
  bd: Date;
  email: string;
  nom: string;
  surname: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onSubmit() {
    let user: any = { "username": this.username, "password": this.password };
    this.authService.login(user).subscribe(
      (data) => {
        console.log(data);

        this.username = '';
        this.password = '';
      },

      (err) => {
        console.log(err);
      }
    );
  }

  register() {
    let user2: any = { "cin":this.cin,"dateBirth":this.bd,"name":this.nom,"surname":this.surname,
    "email":this.email,"username": this.username2, "password": this.password2 };
    this.authService.signup(user2).subscribe(
      (data) => {
        console.log(data);

        user2={}
      },

      (err) => {
        console.log(err);
      }
    );
  }
}
