import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceManChatComponent } from './police-man-chat.component';

describe('PoliceManChatComponent', () => {
  let component: PoliceManChatComponent;
  let fixture: ComponentFixture<PoliceManChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliceManChatComponent]
    });
    fixture = TestBed.createComponent(PoliceManChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
