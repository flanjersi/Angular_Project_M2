import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Message} from '../models/message';
@Component({
  selector: 'app-chat-formulaire',
  templateUrl: './chat-formulaire.component.html',
  styleUrls: ['./chat-formulaire.component.scss']
})
export class ChatFormulaireComponent implements OnInit {

  /**
   * The text property of the html form
   */
 public texte: string;

  /**
   * The new message who has created by the user
   */
 @Output() nouveauMessage: EventEmitter<Message>;

 constructor() {
  this.nouveauMessage = new EventEmitter<Message>();
 }

 ngOnInit() {
  this.texte = '';
 }

  /**
   * Function used to create a new message from a html form
   */
 public envoyer(): void {
  const message = new Message();
  message.auteur = 'toto';
  message.date = new Date();
  message.texte = this.texte;

  this.nouveauMessage.emit(message);
 }

}
