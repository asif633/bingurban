import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/models/category.model';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  constructor(private catServ: CategoryService) { }

  categories: Category[];

  ngOnInit() {
    this.catServ.getCategories().subscribe(cats => this.categories = cats);  
  }

}
