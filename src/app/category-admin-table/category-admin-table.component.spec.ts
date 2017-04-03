import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAdminTableComponent } from './category-admin-table.component';

describe('CategoryAdminTableComponent', () => {
  let component: CategoryAdminTableComponent;
  let fixture: ComponentFixture<CategoryAdminTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryAdminTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAdminTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
