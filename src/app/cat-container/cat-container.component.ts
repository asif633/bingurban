import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-container',
  templateUrl: './cat-container.component.html',
  styleUrls: ['./cat-container.component.scss']
})
export class CatContainerComponent implements OnInit {

  constructor(private catServ: CategoryService, private router: Router) { }

  categories: Category[];

  ngOnInit() {
    this.catServ.getCategories().subscribe(cats => this.categories = cats);
  }

  getCategory(event){
    this.router.navigate(['/category', event]);
  }

}
