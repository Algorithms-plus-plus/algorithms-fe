import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerLogSqrt } from './power-log-sqrt';

describe('PowerLogSqrt', () => {
  let component: PowerLogSqrt;
  let fixture: ComponentFixture<PowerLogSqrt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerLogSqrt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerLogSqrt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
