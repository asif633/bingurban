import { Component, OnInit, Input } from '@angular/core';
import { SubCategoryService } from '../shared/services/subcategory.service';
import { SubCategory } from '../shared/models/subcategory.model';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/models/category.model';

@Component({
  selector: 'app-subcategory-admin-form',
  templateUrl: './subcategory-admin-form.component.html',
  styleUrls: ['./subcategory-admin-form.component.scss']
})
export class SubcategoryAdminFormComponent implements OnInit {

  constructor(private prodServ: SubCategoryService, private catServ: CategoryService) { }

  ngOnInit() {
     this.catServ.getCategories().subscribe(cats => this.categories = cats);
  }

  @Input() product: SubCategory;
  @Input() newProd: boolean;
  categories: Category[];

  addNew(){
    this.prodServ.addSubCategory(this.product);
    this.product = null;
  }

  updateProd(){
    this.prodServ.updateSubCategory(this.product);
    this.product = null;
  }

  deleteProd(){
    this.prodServ.deleteSubCategory(this.product);
    this.product = null;
  }

}
