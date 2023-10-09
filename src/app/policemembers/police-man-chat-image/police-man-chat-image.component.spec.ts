import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceManChatImageComponent } from './police-man-chat-image.component';

describe('PoliceManChatImageComponent', () => {
  let component: PoliceManChatImageComponent;
  let fixture: ComponentFixture<PoliceManChatImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliceManChatImageComponent]
    });
    fixture = TestBed.createComponent(PoliceManChatImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
