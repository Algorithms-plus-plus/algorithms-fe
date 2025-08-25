import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorialRecurrent } from './factorial-recurrent';

describe('FactorialRecurrent', () => {
  let component: FactorialRecurrent;
  let fixture: ComponentFixture<FactorialRecurrent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactorialRecurrent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactorialRecurrent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
