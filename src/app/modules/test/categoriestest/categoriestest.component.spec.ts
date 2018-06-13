import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriestestComponent } from './categoriestest.component';

describe('CategoriestestComponent', () => {
  let component: CategoriestestComponent;
  let fixture: ComponentFixture<CategoriestestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriestestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriestestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
