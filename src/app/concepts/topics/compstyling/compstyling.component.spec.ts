import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompstylingComponent } from './compstyling.component';

describe('CompstylingComponent', () => {
  let component: CompstylingComponent;
  let fixture: ComponentFixture<CompstylingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompstylingComponent]
    });
    fixture = TestBed.createComponent(CompstylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
