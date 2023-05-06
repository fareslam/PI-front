import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
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

        user2 = {};
      },

      (err) => {
        alert(err.error.message)
        console.log(err);
      }
    );
  }
}
