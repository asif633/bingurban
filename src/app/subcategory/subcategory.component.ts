import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubCategory } from '../shared/models/subcategory.model';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() category: SubCategory;
  @Output() chosenSubcategory = new EventEmitter<string>();

  chooseSubcategory(key:string){
    this.chosenSubcategory.emit(key);
  }
}
