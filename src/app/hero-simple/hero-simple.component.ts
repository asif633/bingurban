import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../shared/models/category.model';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-hero-simple',
  templateUrl: './hero-simple.component.html',
  styleUrls: ['./hero-simple.component.scss']
})
export class HeroSimpleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private catServ: CategoryService) { }

  id: string;
  private sub: any;
  category: Category;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.catServ.getCategories().subscribe(cats => this.category = cats.filter(x=>x.$key == this.id)[0]);
      // In a real app: dispatch action to load the details here.
    });
  }

}
