import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { SubCategoryService } from '../shared/services/subcategory.service';
import { Category } from '../shared/models/category.model';
import { SubCategory } from '../shared/models/subcategory.model';
import { Professional } from '../shared/models/professional.model';
import { ProfessionalService } from '../shared/services/professional.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  constructor(private catServ: CategoryService, private subcatServ: SubCategoryService, private profServ: ProfessionalService) { }

  ngOnInit() {
    this.catServ.getCategories().subscribe(cats => this.categories = cats);
    this.prof = this.profServ.getProfessional();
  }

  categories: Category[];
  subcategories: SubCategory[];

  onSelect(cat: Category){
      this.subcatServ.getSubCategories().subscribe(subcats => this.subcategories =subcats.filter(x=> x.categoryKey == cat.$key));
  }

  selectedCategory: Category;
  selectedSubCat: SubCategory;

  onSubCatSelect(subcat: SubCategory){
    this.selectedSubCat = subcat;
    this.prof.subcategoryKey = subcat.$key;
  }

  @Output() doneCategory = new EventEmitter<boolean>();
  prof: Professional;

  save(){
    this.doneCategory.emit(true);
  }

}
