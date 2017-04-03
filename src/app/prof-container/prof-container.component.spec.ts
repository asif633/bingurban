import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfContainerComponent } from './prof-container.component';

describe('ProfContainerComponent', () => {
  let component: ProfContainerComponent;
  let fixture: ComponentFixture<ProfContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
