import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempSyntxComponent } from './temp-syntx.component';

describe('TempSyntxComponent', () => {
  let component: TempSyntxComponent;
  let fixture: ComponentFixture<TempSyntxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempSyntxComponent]
    });
    fixture = TestBed.createComponent(TempSyntxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
