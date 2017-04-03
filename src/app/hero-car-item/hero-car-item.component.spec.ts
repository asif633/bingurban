import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCarItemComponent } from './hero-car-item.component';

describe('HeroCarItemComponent', () => {
  let component: HeroCarItemComponent;
  let fixture: ComponentFixture<HeroCarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
