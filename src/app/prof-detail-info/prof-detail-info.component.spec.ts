import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfDetailInfoComponent } from './prof-detail-info.component';

describe('ProfDetailInfoComponent', () => {
  let component: ProfDetailInfoComponent;
  let fixture: ComponentFixture<ProfDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
