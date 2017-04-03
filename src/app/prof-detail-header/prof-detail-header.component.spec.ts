import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfDetailHeaderComponent } from './prof-detail-header.component';

describe('ProfDetailHeaderComponent', () => {
  let component: ProfDetailHeaderComponent;
  let fixture: ComponentFixture<ProfDetailHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfDetailHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
