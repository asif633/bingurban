import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCarContainerComponent } from './hero-car-container.component';

describe('HeroCarContainerComponent', () => {
  let component: HeroCarContainerComponent;
  let fixture: ComponentFixture<HeroCarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCarContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
