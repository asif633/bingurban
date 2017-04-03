import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from '../shared/services/professional.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Professional } from '../shared/models/professional.model';

@Component({
  selector: 'app-prof-container',
  templateUrl: './prof-container.component.html',
  styleUrls: ['./prof-container.component.scss']
})
export class ProfContainerComponent implements OnInit {

  constructor(private profServ: ProfessionalService, private route: ActivatedRoute, private router: Router) { }

  professionals: Professional[];

  ngOnInit() {
    this.profServ.getProfessionals().subscribe(profs => this.professionals = profs);
    this.route.params.subscribe(params => {
      this.professionals = this.professionals.filter(
        prof => prof.subcategoryKey == params['id']
      );
    });  
  }

  getProfessional(event){
    this.router.navigate(['professional', event]);
  }

}
