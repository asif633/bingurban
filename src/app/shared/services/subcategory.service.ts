import { Injectable, Inject } from '@angular/core';
import { SubCategory } from '../models/subcategory.model';
import { AngularFire, FirebaseRef } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SubCategoryService{

    constructor(public af: AngularFire, @Inject(FirebaseRef) fb){
        this.sdkDb = fb.database().ref();
    }

    sdkDb:any;

    subcategories: Observable<SubCategory[]>;

    initializeNew(): SubCategory{
        let catid = 0;
        this.subcategories.subscribe(subcats => catid = subcats.length+1);
        return {id: catid.toString(), name: '', categoryKey: '',icon: ''};
    }

    getSubCategories(): Observable<SubCategory[]>{
        this.subcategories = this.af.database.list('/subcatagories');
        return this.subcategories;
    }

    getSubCategory(){

    }

    addSubCategory(subcat: SubCategory){
        this.af.database.list('/subcatagories').push(subcat);
    }

    updateSubCategory(subcat: SubCategory){
        this.af.database.list('/subcatagories').update(subcat.$key, {name: subcat.name, categoryKey: subcat.categoryKey, icon: subcat.icon});
    }

    deleteSubCategory(subcat: SubCategory){
        this.af.database.list('/subcatagories').remove(subcat.$key);
    }


}