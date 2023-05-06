import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlaskService } from 'app/services/flask.service';
 
@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {
  selectedCountry: string;
  date: number;
  countries: string[] = []; // Example list of countries
  selectedOption:string;
  constructor(private router:Router,private flask: FlaskService) {}

  ngOnInit(): void {
/*
    if ((localStorage.getItem('user')==null) )
    {

      alert(' FORBIDDEN ACCESS  !!');
      this.router.navigate(['/']);

   }

*/


    this.ListCountries();
  }

  ListCountries() {
    this.flask.getCountries().subscribe(
      (data) => {
        this.countries = data;
        console.log(this.countries);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  submitForm() {
    let prediction: any = {
      Country: this.selectedCountry,
      Target_Date: this.date,
    };
    this.flask.predict(prediction).subscribe(
      (data) => {
        console.log(data);
        alert(data['predicted_emissions']);

        this.selectedCountry = '';
        this.date = 2023;
      },

      (err) => {
        console.log(err);
      }
    );
  }

 }