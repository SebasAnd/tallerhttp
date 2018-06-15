import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsmoviestestComponent } from './detailsmoviestest.component';

describe('DetailsmoviestestComponent', () => {
  let component: DetailsmoviestestComponent;
  let fixture: ComponentFixture<DetailsmoviestestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsmoviestestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsmoviestestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
