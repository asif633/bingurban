import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from '../shared/services/subcategory.service';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/models/category.model';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  constructor(private subcatServ: SubCategoryService, private catServ: CategoryService) { }

  ngOnInit() {
    this.subcatServ.getSubCategories().subscribe(subcats => this.statesComplex = subcats);
    this.cities = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bengaluru', 'Hyderabad'];
    this.catServ.getCategories().subscribe(cats => this.categories = cats);
  }

  public customSelected:string;
  public statesComplex:any[];
  public cities: string[];
  selectedCity:string;
  categories: Category[];

  onSelect(){
    console.log(this.selectedCity);
  }

}
