import { Component, OnInit, OnDestroy, OnChanges, DoCheck } from '@angular/core';
import { SubCategoryService } from '../shared/services/subcategory.service';
import { SubCategory } from '../shared/models/subcategory.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subcat-container',
  templateUrl: './subcat-container.component.html',
  styleUrls: ['./subcat-container.component.scss']
})
export class SubcatContainerComponent implements OnInit, OnDestroy, DoCheck {

  constructor(private subcatServ: SubCategoryService, private route: ActivatedRoute, private router: Router) { }

  id: number;
  private sub: any;

  ngOnInit() {
    this.subcatServ.getSubCategories().subscribe(subcats => this.allSubs = subcats);
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.subcategories = this.allSubs.filter(cat => cat.categoryKey == params['id']);
      // In a real app: dispatch action to load the details here.
    });
    
  }

  subcategories: SubCategory[];
  allSubs: SubCategory[];

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getSubcategory(event) {
    this.router.navigate(['subcategory', event], { relativeTo: this.route })
  }

  ngDoCheck() {
    this.route.params.subscribe(params => {
      this.subcategories = this.allSubs.filter(cat => cat.categoryKey == params['id']);
    });
  }

}
