import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAdminFormComponent } from './category-admin-form.component';

describe('CategoryAdminFormComponent', () => {
  let component: CategoryAdminFormComponent;
  let fixture: ComponentFixture<CategoryAdminFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryAdminFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
