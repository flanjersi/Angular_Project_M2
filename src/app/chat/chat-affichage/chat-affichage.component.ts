import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../models/message';

@Component({
  selector: 'app-chat-affichage',
  templateUrl: './chat-affichage.component.html',
  styleUrls: ['./chat-affichage.component.scss']
})
export class ChatAffichageComponent implements OnInit {

  /**
   * The messages to be displayed in the user interface in the list
   */
  @Input() public messages: Array<Message>;

  constructor() { }

  ngOnInit() {}

}
