import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInteractionComponent } from './comp-interaction.component';

describe('CompInteractionComponent', () => {
  let component: CompInteractionComponent;
  let fixture: ComponentFixture<CompInteractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompInteractionComponent]
    });
    fixture = TestBed.createComponent(CompInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
