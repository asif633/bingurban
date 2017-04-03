import { Injectable } from '@angular/core';
import { ProfInfo } from '../models/profinfo.model';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';

@Injectable()
export class ProfInfoService {

    constructor(private af: AngularFire) { }

    profInfos: Observable<ProfInfo[]>;
    profinfo: ProfInfo;

    initializeNew(): ProfInfo{
        let profid = 0;
        this.getProfInfos().subscribe(profs => profid = profs.length);
        this.profinfo = {id: profid.toString(), price: '', introduction: '', website: '', experience: '', professionalKey: ''};
        return this.profinfo;
    }

    getProfInfos(): Observable<ProfInfo[]> {
        this.profInfos = this.af.database.list("/profInfos");
        return this.profInfos;
    }

    getProfInfo(): ProfInfo {
        return this.profinfo;
    }

    addProfInfo(profinfo: ProfInfo) {
        this.af.database.list('/profInfos').push(profinfo);
    }

    updateProfInfo(profinfo: ProfInfo) {
        this.af.database.list('/profInfos').update(profinfo.$key, {});
    }

    deleteProfInfo(profinfo: ProfInfo) {
        this.af.database.list('/profInfos').remove(profinfo.$key);
    }


}