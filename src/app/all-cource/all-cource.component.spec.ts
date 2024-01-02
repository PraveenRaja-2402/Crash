import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCourceComponent } from './all-cource.component';

describe('AllCourceComponent', () => {
  let component: AllCourceComponent;
  let fixture: ComponentFixture<AllCourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCourceComponent]
    });
    fixture = TestBed.createComponent(AllCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
