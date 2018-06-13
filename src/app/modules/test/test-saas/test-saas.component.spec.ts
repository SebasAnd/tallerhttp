import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSaasComponent } from './test-saas.component';

describe('TestSaasComponent', () => {
  let component: TestSaasComponent;
  let fixture: ComponentFixture<TestSaasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSaasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
