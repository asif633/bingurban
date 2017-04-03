import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/models/category.model';

@Component({
  selector: 'app-category-admin-form',
  templateUrl: './category-admin-form.component.html',
  styleUrls: ['./category-admin-form.component.scss']
})
export class CategoryAdminFormComponent implements OnInit {

  constructor(private prodServ: CategoryService) { }

  ngOnInit() {
  }

  @Input() product: Category;
  @Input() newProd: boolean;

  addNew(){
    this.prodServ.addCategory(this.product);
    this.product = null;
  }

  updateProd(){
    this.prodServ.updateCategory(this.product);
    this.product = null;
  }

  deleteProd(){
    this.prodServ.deleteCategory(this.product);
    this.product = null;
  }

}
