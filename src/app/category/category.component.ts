import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../shared/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  @Input() category: Category;
  
  ngOnInit() {
  }

  @Output() chosenCategory = new EventEmitter<string>();

  choseCategory(key:string){
    this.chosenCategory.emit(key);
  }

}
