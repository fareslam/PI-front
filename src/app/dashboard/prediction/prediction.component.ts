import { Component, OnInit } from '@angular/core';
import { FlaskService } from 'src/app/services/flask.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css'],
})
export class PredictionComponent implements OnInit {
  selectedCountry: string;
  date: number;
  countries: string[] = []; // Example list of countries

  constructor(private flask: FlaskService) {}

  ngOnInit(): void {
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

  // You can now use the selectedCountry and value variables in your logic
}
