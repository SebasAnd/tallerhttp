import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrytestComponent } from './countrytest.component';

describe('CountrytestComponent', () => {
  let component: CountrytestComponent;
  let fixture: ComponentFixture<CountrytestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrytestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
