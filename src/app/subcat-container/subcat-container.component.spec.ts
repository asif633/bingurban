import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatContainerComponent } from './subcat-container.component';

describe('SubcatContainerComponent', () => {
  let component: SubcatContainerComponent;
  let fixture: ComponentFixture<SubcatContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcatContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcatContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
