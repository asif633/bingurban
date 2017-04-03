import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryAdminTableComponent } from './subcategory-admin-table.component';

describe('SubcategoryAdminTableComponent', () => {
  let component: SubcategoryAdminTableComponent;
  let fixture: ComponentFixture<SubcategoryAdminTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryAdminTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryAdminTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
