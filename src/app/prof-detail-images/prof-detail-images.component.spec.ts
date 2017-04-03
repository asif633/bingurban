import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfDetailImagesComponent } from './prof-detail-images.component';

describe('ProfDetailImagesComponent', () => {
  let component: ProfDetailImagesComponent;
  let fixture: ComponentFixture<ProfDetailImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfDetailImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfDetailImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
