import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColombiaWelcomeComponent } from './colombia-welcome.component';

describe('ColombiaWelcomeComponent', () => {
  let component: ColombiaWelcomeComponent;
  let fixture: ComponentFixture<ColombiaWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColombiaWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColombiaWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
