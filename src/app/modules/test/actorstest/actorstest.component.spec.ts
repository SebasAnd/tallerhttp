import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorstestComponent } from './actorstest.component';

describe('ActorstestComponent', () => {
  let component: ActorstestComponent;
  let fixture: ComponentFixture<ActorstestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorstestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
