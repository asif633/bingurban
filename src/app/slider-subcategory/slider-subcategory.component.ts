import { Component, OnInit, Input } from '@angular/core';
import { SubCategoryService } from '../shared/services/subcategory.service';
import { SubCategory } from '../shared/models/subcategory.model';
import { Category } from '../shared/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-subcategory',
  templateUrl: './slider-subcategory.component.html',
  styleUrls: ['./slider-subcategory.component.scss']
})
export class SliderSubcategoryComponent implements OnInit {

  constructor(private subcatServ: SubCategoryService, private router: Router) { }

  ngOnInit() {
     this.subcatServ.getSubCategories().subscribe(subcats => 
          this.subcategories =  subcats.filter(subcat => subcat.categoryKey == this.category.$key));
  }

  subcategories: SubCategory[];

  @Input() category: Category;

  getSubCategory(key:string){
    this.router.navigate(['/subcategory', key]);
  }

}
