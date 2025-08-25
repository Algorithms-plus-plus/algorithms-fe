import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sum } from './sum';

describe('Sum', () => {
  let component: Sum;
  let fixture: ComponentFixture<Sum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
