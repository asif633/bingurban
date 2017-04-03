import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category.model';
import { SubCategory } from '../shared/models/subcategory.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.selectedProduct = null;
  }

  selectedProduct: Category;
  addBool: boolean;

  getSelectedProduct(event){
    this.selectedProduct = event;
  }

  addOrUpdate(event){
    this.addBool = event;
  }

  selectedProduct1: SubCategory;
  addBool1: boolean;

  getSelectedProduct1(event){
    this.selectedProduct1 = event;
  }

  addOrUpdate1(event){
    this.addBool1 = event;
  }

}
