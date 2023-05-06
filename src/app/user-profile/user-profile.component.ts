import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
userL:any;
user: any;
username: string;
password: string;
cin: string;
userByUsername: any;
tel: number;
dateBirth: Date;
email: string;
nom: string;
surname: string;
  constructor(private router: Router,private authesrvice: AuthService) { }

  ngOnInit() {

    const userString = localStorage.getItem('user');
    if (userString !== null) {
      this.userL = JSON.parse(userString);
    }
    this.authesrvice.getUser(this.userL.username).subscribe(
      data => {
        this.user=data;

          console.log(this.user)
      },

      err => console.log(err)); 
  }


  updateUser() {
    let updatedUser: any = {
      cin: this.user.cin,

      dateBirth: this.user.dateBirth,
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email,
      username: this.user.username,
      password: this.user.password,
      tel: this.user.tel,
    };

    console.log(updatedUser);
    if (window.confirm("Do you want to delete this item?")) {

    this.authesrvice.update(this.user.username, updatedUser).subscribe(
      (data) => {
        console.log(data);
        localStorage.clear();
        this.authesrvice.getUser(this.user.username).subscribe(
          (data) => {
            this.userByUsername = data;

            const stockage = JSON.stringify(this.userByUsername);
            localStorage.setItem('user', stockage);

            alert('update successfull ');
          },
          (err) => {
            console.log(err);
          }
        );
      },

      (err) => {
        alert('update failed ');
      

        console.log(err);
      }
    );
  }
  else {}

}
}