import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  httpOptions = {
    'responseType': 'xml' as 'json'
  };
  constructor(private http: HttpClient) { }

  country: string;
  state: string;
  regNum: string;
  getdata(country:string, state:string, regNumber:string): Promise<any> {
    return new Promise((resolve, reject) => {
      var func, url;
      switch (country) {
        case "GBR":
          func = "Check";
          break;
        case "AUS":
          func = "CheckAustralia";
          break;

        case "DNK":
          func = "CheckDenmark";
          break;
        case "EST":
          func = "CheckEstonia";
          break;

        case "FIN":
          func = "CheckFinland";
          break;
        case "FRA":
          func = "CheckFrance";
          break;
        case "HUN":
          func = "CheckHungary";
          break;
        case "IND":
          func = "CheckIndia";
          break;


        case "IRL":
          func = "CheckIreland";
          break;
        case "ITA":
          func = "CheckItaly";
          break;

        case "NLD":
          func = "CheckNetherlands ";
          break;
        case "NZL":
          func = "CheckNewZealand ";
          break;

        case "NOR":
          func = "CheckNorway ";
          break;
        case "PRT":
          func = "CheckPortugal ";
          break;
        case "RUS":
          func = "CheckRussia ";
          break;
        case "SVK":
          func = "CheckSlovakia ";
          break;



        case "ZAF":
          func = "CheckSouthAfrica ";
          break;
        case "ESP":
          func = "CheckSpain ";
          break;

        case "LKA":
          func = "CheckSriLanka ";
          break;
        case "SWE":
          func = "CheckSweden ";
          break;

        case "ARE":
          func = "CheckUAE ";
          break;
        case "USA":
          func = "CheckUSA";
          break;
      }
      url = "http://regcheck.org.uk/api/reg.asmx/" + func + "?RegistrationNumber=" + regNumber + "&username=dananos"
      // "http://regcheck.org.uk/api/reg.asmx/Check?RegistrationNumber=YYO7XHH&username=dananos"
      this.http
        .get(url, this.httpOptions)
        .subscribe(
          json => {
            resolve(json);
          },
          error => {
            reject(error);
          }
        );
    });
    // });
  }
  setdata(country, state, regNum) {
    this.country = country;
    this.state = state;
    this.regNum = regNum;
  }
  getinfo() {
    return { country: this.country, state: this.state, regNum: this.regNum };
  }
}
