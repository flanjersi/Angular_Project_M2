import { TestBed } from '@angular/core/testing';

import { ChatService } from './chat.service';
import {Message} from '../models/message';
import {HttpClientModule} from '@angular/common/http';

describe('ChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ChatService = TestBed.get(ChatService);
    expect(service).toBeTruthy();
  });

  it('build message properly', () => {
    const service: ChatService = TestBed.get(ChatService);

    const array = service.buildMessages(null);
    expect(array.length).toEqual(0);
  });

  it('add message properly', () => {
    const service: ChatService = TestBed.get(ChatService);
    const nbMessages = service.messages.length;
    service.addMessage(new Message());
    expect(nbMessages + 1).toEqual(service.messages.length);
  });
});
