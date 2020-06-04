import { Component, OnInit } from '@angular/core';
import {Country} from '@angular-material-extensions/select-country';
import { CrudServiceService } from './../service/crud-service.service';
import { Router } from '@angular/router';
import { from } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  usStates: any;
  australliaStates: any;
  COUNTRIES_DB: any;
  stateFlag: boolean;
  recaptchaFlag: boolean;
  data: any;
  country: string;
  state: string;
  regNumber: string;
  constructor(private router: Router,
              public crudService: CrudServiceService,
              private http: HttpClient) { 
              }

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

        this.COUNTRIES_DB = [
            {
                name: 'Argentina',
                alpha2Code: 'AR',
                alpha3Code: 'ARG',
                numericCode: '032'
            },
            {
                name: 'Australia',
                alpha2Code: 'AU',
                alpha3Code: 'AUS',
                numericCode: '036'
            },
            {
                name: 'Bolivia',
                alpha2Code: 'BO',
                alpha3Code: 'BOL',
                numericCode: '068'
            },
            {
                name: 'Brazil',
                alpha2Code: 'BR',
                alpha3Code: 'BRA',
                numericCode: '076'
            },
            {
                name: 'Chile',
                alpha2Code: 'CL',
                alpha3Code: 'CHL',
                numericCode: '152'
            },
            {
                name: 'Colombia',
                alpha2Code: 'CO',
                alpha3Code: 'COL',
                numericCode: '170'
            },
            {
                name: 'Croatia',
                alpha2Code: 'HR',
                alpha3Code: 'HRV',
                numericCode: '191'
            },
                    
            {
                name: 'Cyprus',
                alpha2Code: 'CY',
                alpha3Code: 'CYP',
                numericCode: '196'
            },
            {
                name: 'Czechia',
                alpha2Code: 'CZ',
                alpha3Code: 'CZE',
                numericCode: '203'
            },
                    
            {
                name: 'Denmark',
                alpha2Code: 'DK',
                alpha3Code: 'DNK',
                numericCode: '208'
            },
                    
            {
                name: 'Ecuador',
                alpha2Code: 'EC',
                alpha3Code: 'ECU',
                numericCode: '218'
            },
                
            {
                name: 'Estonia',
                alpha2Code: 'EE',
                alpha3Code: 'EST',
                numericCode: '233'
            },
                    
            {
                name: 'Finland',
                alpha2Code: 'FI',
                alpha3Code: 'FIN',
                numericCode: '246'
            },
            {
                name: 'France',
                alpha2Code: 'FR',
                alpha3Code: 'FRA',
                numericCode: '250'
            },

            {
                name: 'Germany',
                alpha2Code: 'DE',
                alpha3Code: 'DEU',
                numericCode: '276'
            },
                    
            {
                name: 'Hungary',
                alpha2Code: 'HU',
                alpha3Code: 'HUN',
                numericCode: '348'
            },
            {
                name: 'Iceland',
                alpha2Code: 'IS',
                alpha3Code: 'ISL',
                numericCode: '352'
            },
            {
                name: 'India',
                alpha2Code: 'IN',
                alpha3Code: 'IND',
                numericCode: '356'
            },
            {
                name: 'Ireland',
                alpha2Code: 'IE',
                alpha3Code: 'IRL',
                numericCode: '372'
            },
            {
                name: 'Israel',
                alpha2Code: 'IL',
                alpha3Code: 'ISR',
                numericCode: '376'
            },
            {
                name: 'Italy',
                alpha2Code: 'IT',
                alpha3Code: 'ITA',
                numericCode: '380'
            },
            {
                name: 'Latvia',
                alpha2Code: 'LV',
                alpha3Code: 'LVA',
                numericCode: '428'
            },
            {
                name: 'Mexico',
                alpha2Code: 'MX',
                alpha3Code: 'MEX',
                numericCode: '484'
            },
            {
                name: 'Netherlands',
                alpha2Code: 'NL',
                alpha3Code: 'NLD',
                numericCode: '528'
            },
            {
                name: 'New Zealand',
                alpha2Code: 'NZ',
                alpha3Code: 'NZL',
                numericCode: '554'
            },
                    
            {
                name: 'Nigeria',
                alpha2Code: 'NG',
                alpha3Code: 'NGA',
                numericCode: '566'
            },
            {
                name: 'Norway',
                alpha2Code: 'NO',
                alpha3Code: 'NOR',
                numericCode: '578'
            },
            {
                name: 'Peru',
                alpha2Code: 'PE',
                alpha3Code: 'PER',
                numericCode: '604'
            },
                    
            {
                name: 'Portugal',
                alpha2Code: 'PT',
                alpha3Code: 'PRT',
                numericCode: '620'
            },
                    
            {
                name: 'Russian Federation (the)',
                alpha2Code: 'RU',
                alpha3Code: 'RUS',
                numericCode: '643'
            },
                    
            {
                name: 'Singapore',
                alpha2Code: 'SG',
                alpha3Code: 'SGP',
                numericCode: '702'
            },
            {
                name: 'Slovakia',
                alpha2Code: 'SK',
                alpha3Code: 'SVK',
                numericCode: '703'
            },
                    
            {
                name: 'South Africa',
                alpha2Code: 'ZA',
                alpha3Code: 'ZAF',
                numericCode: '710'
            },
                    
            {
                name: 'Spain',
                alpha2Code: 'ES',
                alpha3Code: 'ESP',
                numericCode: '724'
            },
            {
                name: 'Sri Lanka',
                alpha2Code: 'LK',
                alpha3Code: 'LKA',
                numericCode: '144'
            },
                    
            {
                name: 'Sweden',
                alpha2Code: 'SE',
                alpha3Code: 'SWE',
                numericCode: '752'
            },
                    
            {
                name: 'Ukraine',
                alpha2Code: 'UA',
                alpha3Code: 'UKR',
                numericCode: '804'
            },
            {
                name: 'United Arab Emirates',
                alpha2Code: 'AE',
                alpha3Code: 'ARE',
                numericCode: '784'
            },
            {
                name: 'United Kingdom',
                alpha2Code: 'GB',
                alpha3Code: 'GBR',
                numericCode: '826'
            },
            {
                name: 'United States of America',
                alpha2Code: 'US',
                alpha3Code: 'USA',
                numericCode: '840'
            },
        ];
  }

  onCountrySelected($event) {
    this.country = $event.value;

    if($event.value == "USA"){
        this.stateFlag = true;
    }
    else if($event.value == "AUS"){
        this.usStates = this.australliaStates;
        this.stateFlag = true;
    }
    else {
        this.stateFlag = false;
    }

  }

  onStateSelected($event){
    this.state = $event.value;
  }

  regNumberInput($event){
      this.regNumber = $event.target.value;
  }

  btnClick(){

    this.crudService.setdata(this.country, this.state, this.regNumber);
    
    this.router.navigate(['/user-profile']);

  }
  resolved(captchaResponse: string) {
      console.log(`Resolved captcha with response: ${captchaResponse}`);
      this.router.navigate(['/user-profile']);
  }
}
