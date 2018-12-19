import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAffichageComponent } from './chat-affichage.component';
import {Message} from '../models/message';
import {ChatElementComponent} from '../chat-element/chat-element.component';

describe('ChatAffichageComponent', () => {
  let component: ChatAffichageComponent;
  let fixture: ComponentFixture<ChatAffichageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChatAffichageComponent,
        ChatElementComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
