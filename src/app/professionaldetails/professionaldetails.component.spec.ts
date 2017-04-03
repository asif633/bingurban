import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionaldetailsComponent } from './professionaldetails.component';

describe('ProfessionaldetailsComponent', () => {
  let component: ProfessionaldetailsComponent;
  let fixture: ComponentFixture<ProfessionaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
