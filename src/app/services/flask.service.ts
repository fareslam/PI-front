import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FlaskService {
  private path = "http://192.168.77.78:5000/";
  // private path = 'http://localhost:5000/';
  constructor(private http: HttpClient) {}

  predict(data: any): Observable<any> {
    return this.http.post(`${this.path}/predict_emissions`, data);
  }

  getCountries(): Observable<string[]> {
    return this.http.get<string[]>(`${this.path}/distinct_countries`).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(
          () => new Error("error while fetching data from flask mr flam")
        );
      })
    );
  }
  getCountries2(): Observable<string[]> {
    return this.http.get<string[]>(`${this.path}/distinct_countries_nex`).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(
          () => new Error("error while fetching data from flask mr flam")
        );
      })
    );
  }
  predictfreshwater(data: any): Observable<any> {
    return this.http.post(`${this.path}/predict_water`, data);
  }
  getcounty(): Observable<any> {
    return this.http.get<string[]>(`${this.path}/distinct_countries_nex`);
  }
  predectionpoverty(data: any): Observable<any> {
    return this.http.post(`${this.path}predictpoverty`, data);
  }
  predectionhunger(data: any): Observable<any> {
    return this.http.post(`${this.path}predict_hunger`, data);
  }
  recommand(data: any): Observable<any> {
    return this.http.post(`${this.path}recommendations`, data);
  }
}
 