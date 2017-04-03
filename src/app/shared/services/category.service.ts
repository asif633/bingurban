import { Injectable, Inject } from '@angular/core';
import { Category } from '../models/category.model';
import { AngularFire, FirebaseRef } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService{

    constructor(public af: AngularFire, @Inject(FirebaseRef) fb){
        this.sdkDb = fb.database().ref();
    }
    
    public categories: Observable<Category[]>;
    sdkDb:any;

    initializeNew(): Category{
        let catid = 0;
        this.categories.subscribe(cats => catid = cats.length+1);
        return {id: catid.toString(), name: '', icon: ''};
    }

    getCategories(): Observable<Category[]>{
        this.categories = this.af.database.list('/categories');
        return this.categories;
    }

    getCategory(){

    }

    addCategory(cat: Category){
        console.log(cat);
        this.af.database.list('/categories').push(cat);
    }

    updateCategory(cat: Category){
        console.log(cat);
        this.af.database.list('/categories').update(cat.$key, {name: cat.name, tagline: cat.tagline, icon: cat.icon});
    }

    deleteCategory(cat: Category){
        this.af.database.list('/categories').remove(cat.$key);
    }


}