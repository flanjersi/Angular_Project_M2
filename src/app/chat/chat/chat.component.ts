import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import {ChatService} from '../services/chat.service';
import {Message} from '../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public messages: Observable<Array<Message>>;

  constructor(private chatService: ChatService) {
    this.messages = new Observable<Array<Message>>();
  }

  ngOnInit() {
    this.messages = this.chatService.getMessages();
  }

  public gererNouveauMessage(message: Message): void {
    this.messages = this.chatService.addMessage(message);
  }


}
