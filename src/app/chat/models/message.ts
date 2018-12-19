/**
 * Model of the message
 */
export class Message {
  /**
   * Texte of the message
   */
 public texte: string;
  /**
   * The author of the message
   */
 public auteur: string;

  /**
   * The date when the message was publicated
   */
 public date: Date;

  /**
   * Construct a message from json data
   * @param data json data who represent a message
   */
 constructor(data?: any) {
   if (data) {
      this.texte = data.body;
      this.auteur = data.title;
      this.date = data.date ? data.date : new Date();
   }
 }
}
