import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatV2 } from './chat-v2';

describe('ChatV2', () => {
  let component: ChatV2;
  let fixture: ComponentFixture<ChatV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatV2],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
