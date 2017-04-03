import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Professional } from '../shared/models/professional.model';
import { ProfessionalService } from '../shared/services/professional.service';
import { ProfInfoService } from '../shared/services/profinfo.service';

@Component({
  selector: 'app-professional-form',
  templateUrl: './professional-form.component.html',
  styleUrls: ['./professional-form.component.scss']
})
export class ProfessionalFormComponent implements OnInit {

  constructor(private profServ: ProfessionalService, private profInfo: ProfInfoService) { }

  ngOnInit() {
    this.prof = this.profServ.getProfessional();
  }



  @Output() professionalDone = new EventEmitter<boolean>();
  prof: Professional;

  save(){
    console.log("prof "+ this.prof.subcategoryKey);
    if(this.prof.$key){
      this.profServ.updateProfessional(this.prof);
    }
    else{
      this.profServ.addProfessional(this.prof);
    }
    this.professionalDone.emit(true);
  }

}
