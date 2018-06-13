import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviestestComponent } from './moviestest.component';

describe('MoviestestComponent', () => {
  let component: MoviestestComponent;
  let fixture: ComponentFixture<MoviestestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviestestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviestestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
