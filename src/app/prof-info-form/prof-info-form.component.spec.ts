import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfInfoFormComponent } from './prof-info-form.component';

describe('ProfInfoFormComponent', () => {
  let component: ProfInfoFormComponent;
  let fixture: ComponentFixture<ProfInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
