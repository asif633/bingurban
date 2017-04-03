import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/models/category.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-category-admin-table',
  templateUrl: './category-admin-table.component.html',
  styleUrls: ['./category-admin-table.component.scss']
})
export class CategoryAdminTableComponent implements OnInit {

  constructor(private prodServ: CategoryService) { }

  products: Observable<Category[]>;

  ngOnInit() {
    this.products = this.prodServ.getCategories();
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
