import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryAdminFormComponent } from './subcategory-admin-form.component';

describe('SubcategoryAdminFormComponent', () => {
  let component: SubcategoryAdminFormComponent;
  let fixture: ComponentFixture<SubcategoryAdminFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryAdminFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
