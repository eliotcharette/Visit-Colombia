import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColombiaCarouselComponent } from './colombia-carousel.component';

describe('ColombiaCarouselComponent', () => {
  let component: ColombiaCarouselComponent;
  let fixture: ComponentFixture<ColombiaCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColombiaCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColombiaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
