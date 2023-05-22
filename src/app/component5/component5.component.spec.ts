import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component5Component } from './component5.component';

describe('Component5Component', () => {
  let component: Component5Component;
  let fixture: ComponentFixture<Component5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Component5Component]
    });
    fixture = TestBed.createComponent(Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
