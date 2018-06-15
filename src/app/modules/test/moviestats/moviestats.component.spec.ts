import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviestatsComponent } from './moviestats.component';

describe('MoviestatsComponent', () => {
  let component: MoviestatsComponent;
  let fixture: ComponentFixture<MoviestatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviestatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
