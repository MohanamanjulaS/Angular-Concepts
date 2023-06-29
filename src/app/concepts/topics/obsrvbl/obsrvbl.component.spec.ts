import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsrvblComponent } from './obsrvbl.component';

describe('ObsrvblComponent', () => {
  let component: ObsrvblComponent;
  let fixture: ComponentFixture<ObsrvblComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObsrvblComponent]
    });
    fixture = TestBed.createComponent(ObsrvblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
