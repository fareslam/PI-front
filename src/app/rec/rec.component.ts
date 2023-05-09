import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlaskService } from 'app/services/flask.service';
@Component({
  selector: 'app-rec',
  templateUrl: './rec.component.html',
  styleUrls: ['./rec.component.scss']
})
export class RecComponent implements OnInit {
  selectedCountry: string;
   countries: string[] = [];
url:string;
ok:boolean=false;
  selectedOption:string;
  response:any;
  constructor(private router:Router,private flask: FlaskService) {}

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
    this.ok=false;
    let rec: any = {
      country: this.selectedCountry 
    };
    this.flask.recommand(rec).subscribe(
      (data) => {
        
        this.ok=true;
        this.url='/assets/img/'+this.selectedCountry+'.png';
        console.log(data['recommendations']);
        this.response=data['recommendations'];

        

        //alert(data['predicted_emissions']);

        this.selectedCountry = '';
 
      },

      (err) => {
        console.log(err);
      }
    );
  }

 


}
