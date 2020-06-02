import { Component, OnInit } from '@angular/core';
import {Country} from '@angular-material-extensions/select-country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usStates: any;
  australliaStates: any;
  stateFlag: boolean;
  recaptchaFlag: boolean;
  constructor(private router: Router) { }
  ngOnInit() {
    this.stateFlag = false;
        this.recaptchaFlag = false;
        this.usStates = [];
        this.australliaStates = [
            {name: "New South Wales", abbreviation: "NSW"},
            {name: "Queensland", abbreviation: "QLD"},
            {name: "New South Wales", abbreviation: "NSW"},
            {name: "Tasmania", abbreviation: "TAS"},
            {name: "Victoria", abbreviation: "VIC"},
            {name: "Western Australia", abbreviation: "WA"},
            {name: "Australian Capital Territory", abbreviation: "ACT"},
            {name: "Northern Territory", abbreviation: "NT"},    
        ]


        this.usStates = [
            {name: "Alabama", abbreviation: "AL"},
            {name: "Alaska", abbreviation: "AK"},
            {name: "Arizona", abbreviation: "AZ"},
            {name: "Arkansas", abbreviation: "AR"},
            {name: "California", abbreviation: "CA"},
            {name: "Colorado", abbreviation: "CO"},
            {name: "Connecticut", abbreviation: "CT"},
            {name: "Delaware", abbreviation: "DE"},
            {name: "Florida", abbreviation: "FL"},
            {name: "Georgia", abbreviation: "GA"},
            {name: "Hawaii", abbreviation: "HI"},
            {name: "Idaho", abbreviation: "ID"},
            {name: "Illinois", abbreviation: "IL"},
            {name: "Indiana", abbreviation: "IN"},
            {name: "Iowa", abbreviation: "IA"},
            {name: "Kansas", abbreviation: "KS"},
            {name: "Kentucky", abbreviation: "KY"},
            {name: "Louisiana", abbreviation: "LA"},
            {name: "Maine", abbreviation: "ME"},
            {name: "Maryland", abbreviation: "MD"},
            {name: "Massachusetts", abbreviation: "MA"},
            {name: "Michigan", abbreviation: "MI"},
            {name: "Minnesota", abbreviation: "MN"},
            {name: "Mississippi", abbreviation: "MS"},
            {name: "Missouri", abbreviation: "MO"},
            {name: "Montana", abbreviation: "MT"},
            {name: "Nebraska", abbreviation: "NE"},
            {name: "Nevada", abbreviation: "NV"},
            {name: "New Hampshire", abbreviation: "NH"},
            {name: "New Jersey", abbreviation: "NJ"},
            {name: "New Mexico", abbreviation: "NM"},
            {name: "New York", abbreviation: "NY"},
            {name: "North Carolina", abbreviation: "NC"},
            {name: "North Dakota", abbreviation: "ND"},
            {name: "Ohio", abbreviation: "OH"},
            {name: "Oklahoma", abbreviation: "OK"},
            {name: "Oregon", abbreviation: "OR"},
            {name: "Pennsylvania", abbreviation: "PA"},
            {name: "Rhode Island", abbreviation: "RI"},
            {name: "South Carolina", abbreviation: "SC"},
            {name: "South Dakota", abbreviation: "SD"},
            {name: "Tennessee", abbreviation: "TN"},
            {name: "Texas", abbreviation: "TX"},
            {name: "Utah", abbreviation: "UT"},
            {name: "Vermont", abbreviation: "VT"},
            {name: "Virginia", abbreviation: "VA"},
            {name: "Washington", abbreviation: "WA"},
            {name: "West Virginia", abbreviation: "WV"},
            {name: "Wisconsin", abbreviation: "WI"},
            {name: "Wyoming", abbreviation: "WY"}]
  }
  onCountrySelected($event: Country) {
    console.log($event);
    // this.usStates = this.usStateService.getStates();
    console.log(this.usStates);
    if($event.alpha3Code == "USA"){
        // this.usStates = this.usStateService.getStates();
        this.stateFlag = true;

    }
    else if($event.alpha3Code == "AUS"){
        this.usStates = this.australliaStates;
        this.stateFlag = true;

    }
    else {
        // this.usStates = [];
        this.stateFlag = false;

    }
  }
  btnClick(){
      console.log("btnclicked")
      this.recaptchaFlag = true;
  }
  resolved(captchaResponse: string) {
      console.log(`Resolved captcha with response: ${captchaResponse}`);
      this.router.navigate(['/user-profile']);
  }
}
