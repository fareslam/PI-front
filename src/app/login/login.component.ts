import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OnInit } from '@angular/core';
import {   Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  userByUsername:any;
  constructor(private authService: AuthService,  private router: Router)
  {
  
  }

  ngOnInit(): void {
  }

login()
{
  let user: any = { username: this.username, password: this.password };

  this.authService.login(user).subscribe(
    (data) => {
      console.log(data);
      this.authService.getUser(this.username).subscribe(
        (data) => {
          this.userByUsername = data;

          const stockage = JSON.stringify(this.userByUsername);
          localStorage.setItem('user', stockage);
           //window.location.href = 'http://localhost:4200/d';

            console.log(this.username)
          this.router.navigate(['/dashboard/home']);

        },
        (err) => {
        
          console.log(err);
        }
      );



      this.username = '';
      this.password = '';
    },

    (err) => {
      alert("Login failed !")
      console.log(err);
    }
  );

}

}
