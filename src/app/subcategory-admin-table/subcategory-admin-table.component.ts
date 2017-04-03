import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SubCategoryService } from '../shared/services/subcategory.service';
import { SubCategory } from '../shared/models/subcategory.model';
import { Category } from '../shared/models/category.model';
import { CategoryService } from '../shared/services/category.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-subcategory-admin-table',
  templateUrl: './subcategory-admin-table.component.html',
  styleUrls: ['./subcategory-admin-table.component.scss']
})
export class SubcategoryAdminTableComponent implements OnInit {

  constructor(private prodServ: SubCategoryService) { }

  products: Observable<SubCategory[]>;

  ngOnInit() {
    this.products = this.prodServ.getSubCategories();
  }

  @Output() selectProduct = new EventEmitter<Category>();
  @Output() add = new EventEmitter<boolean>();

  selectedProduct(product: Category){
    this.selectProduct.emit(product);
    this.add.emit(false);
  }

  initializeNew(){
    this.selectProduct.emit(this.prodServ.initializeNew());
    this.add.emit(true);
  }

}
