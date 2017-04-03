import { Injectable } from '@angular/core';
import { Professional } from '../models/professional.model';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfessionalService{

    constructor(private af: AngularFire){
        
    }

    professionals: Observable<Professional[]>;
    professional: Professional;

    initializeNew(): Professional{
        let profid = 0;
        this.getProfessionals().subscribe(profs => profid = profs.length);
        this.professional = {id: profid.toString(), name: '', subcategoryKey: '', photoUrl: '', addressLine: ''};
        return this.professional;
    }

    getProfessionals(): Observable<Professional[]>{
        this.professionals = this.af.database.list('/professionals');
        return this.professionals;
    }

    getProfessional(){
        this.professionals = this.af.database.object('/professionals');
        return this.professional;
    }

    addProfessional(prof: Professional){
        this.af.database.list('/professionals').push(prof);
    }

    updateProfessional(prof: Professional){
        this.af.database.list('/professionals').update(prof.$key, {name: prof.name, addressLine: prof.addressLine, photoUrl: prof.photoUrl, mobile: prof.mobile});
    }

    deleteProfessional(prof: Professional){
        this.af.database.list('/professionals').remove(prof.$key);
    }


}