import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFunctionalityComponent } from './view-functionality.component';

describe('ViewFunctionalityComponent', () => {
  let component: ViewFunctionalityComponent;
  let fixture: ComponentFixture<ViewFunctionalityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFunctionalityComponent]
    });
    fixture = TestBed.createComponent(ViewFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
