import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/models/category.model';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss']
})
export class HeroCarouselComponent implements OnInit {

  constructor(private catServ: CategoryService) { }

  categories: Category[];

  ngOnInit() {
    this.catServ.getCategories().subscribe(cats => this.categories = cats);
  }

}
