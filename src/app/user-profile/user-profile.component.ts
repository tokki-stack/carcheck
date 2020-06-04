import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from './../service/crud-service.service';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  data: any;
  info: any;
  country: string;
  state: string;
  regNum: string;
  carInfo: any;
  obj: any;
  constructor(public crudService: CrudServiceService) { }

  ngOnInit() {

    this.country = this.crudService.getinfo()?.country;
    this.state = this.crudService.getinfo()?.state;
    this.regNum = this.crudService.getinfo()?.regNum;
    this.crudService.getdata(this.country, this.state, this.regNum).then((data) => {
      this.data = data
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(this.data, (err, result) => {
        this.carInfo = result.VEHICLE.VEHICLEJSON[0]
      });
      this.obj = JSON.parse(this.carInfo);
    });
  }

}
