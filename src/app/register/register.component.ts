import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import Swal from 'sweetalert2';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
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
  userByUsername: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  register() {
    let user2: any = {
      cin: this.cin,
      dateBirth: this.bd,
      name: this.nom,
      surname: this.surname,
      email: this.email,
      username: this.username,
      password: this.password,
      tel:this.tel
    };

    this.authService.signup(user2).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          title: 'Registration done!',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
        user2 = {};
      },

      (err) => {
        Swal.fire({
          title: 'Registration failed!',
          text: 'You should try again',
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
        console.log(err);
      }
    );
  }
}
