import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColombiaHeaderComponent } from './colombia-header.component';

describe('ColombiaHeaderComponent', () => {
  let component: ColombiaHeaderComponent;
  let fixture: ComponentFixture<ColombiaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColombiaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColombiaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
