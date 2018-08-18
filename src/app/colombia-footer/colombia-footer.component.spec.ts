import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColombiaFooterComponent } from './colombia-footer.component';

describe('ColombiaFooterComponent', () => {
  let component: ColombiaFooterComponent;
  let fixture: ComponentFixture<ColombiaFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColombiaFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColombiaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
