import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientsComponent } from './httpclients.component';

describe('HttpclientsComponent', () => {
  let component: HttpclientsComponent;
  let fixture: ComponentFixture<HttpclientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpclientsComponent]
    });
    fixture = TestBed.createComponent(HttpclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
