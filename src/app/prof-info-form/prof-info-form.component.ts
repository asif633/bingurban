import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfInfoService } from '../shared/services/profinfo.service';
import { ProfInfo } from '../shared/models/profinfo.model';
import { Professional } from '../shared/models/professional.model';
import { ProfessionalService } from '../shared/services/professional.service';

@Component({
  selector: 'app-prof-info-form',
  templateUrl: './prof-info-form.component.html',
  styleUrls: ['./prof-info-form.component.scss']
})
export class ProfInfoFormComponent implements OnInit {

  constructor(private profInfoServ: ProfInfoService, private profServ: ProfessionalService) { }

  ngOnInit() {
    this.profinfo = this.profInfoServ.getProfInfo();
  }

  @Output() profInfoDone = new EventEmitter<boolean>();
  profinfo: ProfInfo;

  save(){
    this.profInfoDone.emit(true);
    console.log("prof key "+ this.profServ.getProfessional().$key);
    this.profinfo.professionalKey = this.profServ.getProfessional().$key;
    this.profInfoServ.addProfInfo(this.profinfo);
  }

}
