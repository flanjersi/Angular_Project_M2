import { Injectable } from '@angular/core';
import {Message} from '../models/message';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {of} from 'rxjs';


/**
 * Service to manipulate data of the chat
 */
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public messages: Array<Message>;

  constructor(private http: HttpClient) {
    this.messages = new Array<Message>();
  }

  /**
   * Build an array of message from a json string
   * @param resultats the json string who contains data of messages
   */
  public buildMessages(resultats: Array<any>): Array<Message> {
    const messages = [];
    if (resultats != null) {
       for (const result of resultats) {
          const message = new Message(result);
          messages.push(message);
       }
    }
    return messages;
  }

  /**
   * Get messages from a web service RESTFul
   */
  public getMessages(): Observable<Array<Message>> {
    return new Observable<Array<Message>>((observer) => {

      //Choose the web service
      //this.http.get<Array<any>>('https://jsonplaceholder.typicode.com/posts')
      this.http.get<Array<any>>('http://localhost:3000/api/posts')
        .subscribe( (messages) => {
           this.messages = this.buildMessages(messages);
           observer.next(this.messages);
           },
          (error) => observer.error(error),
          () => observer.complete()
      );
    });
  }

  /**
   * Add a message and return the new array of message
   * @param message message who needed to insert in list of messages
   */
  public addMessage(message: Message): Observable<Array<Message>>{
    this.messages.push(message);
    return of(this.messages); // angular 6
    // sinon : return Observable.of()
  }



}
