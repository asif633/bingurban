import { Component, OnInit,ViewChild } from '@angular/core';
import { ProfessionalService } from '../shared/services/professional.service';
import { Professional } from '../shared/models/professional.model';
import { ProfInfoService } from '../shared/services/profinfo.service';
import { ProfInfo } from '../shared/models/profinfo.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private profServ: ProfessionalService, private profInfoServ: ProfInfoService) { }


  ngOnInit() {
    this.categoryDisable = false;
    this.categoryActive = true;
    this.professionalDisable = true;
    this.professionalActive = false;
    this.profInfoActive = false;
    this.profInfoDisable = true;
    this.imageUploadDisable = true;
    this.imageUploadActive = false;
    this.professional = this.profServ.initializeNew();
    this.profinfo = this.profInfoServ.initializeNew();
  }

  professional: Professional;
  profinfo: ProfInfo;
  categoryDisable: boolean;
  professionalDisable: boolean;
  profInfoDisable: boolean;
  imageUploadDisable: boolean;

  categoryActive: boolean;
  professionalActive: boolean;
  profInfoActive: boolean;
  imageUploadActive: boolean;

  getCatDone(event){
    this.professionalActive = event;
    this.professionalDisable = !event;
    console.log("cc "+ this.professional.subcategoryKey);
  }

  getProfDone(event){
    this.profInfoActive = event;
    this.profInfoDisable = !event;
  }

  getProfInfoDone(event){
    this.imageUploadDisable = !event;
    this.imageUploadActive = event;
  }

}
