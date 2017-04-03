import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Professional } from '../shared/models/professional.model';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() professional: Professional;
  @Output() chosenProfessional = new EventEmitter<string>();

  chooseProfessional(key:string){
    this.chosenProfessional.emit(key);
  }
}
