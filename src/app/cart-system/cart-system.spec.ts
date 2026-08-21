import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSystem } from './cart-system';

describe('CartSystem', () => {
  let component: CartSystem;
  let fixture: ComponentFixture<CartSystem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSystem],
    }).compileComponents();

    fixture = TestBed.createComponent(CartSystem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
