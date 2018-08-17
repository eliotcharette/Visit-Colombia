import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColombiaNavComponent } from './colombia-nav.component';

describe('ColombiaNavComponent', () => {
  let component: ColombiaNavComponent;
  let fixture: ComponentFixture<ColombiaNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColombiaNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColombiaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
