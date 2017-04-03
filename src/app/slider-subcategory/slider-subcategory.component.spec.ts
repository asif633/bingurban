import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSubcategoryComponent } from './slider-subcategory.component';

describe('SliderSubcategoryComponent', () => {
  let component: SliderSubcategoryComponent;
  let fixture: ComponentFixture<SliderSubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderSubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
