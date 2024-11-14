import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Message, MessageList } from '../types/Message.type';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  private userMessagesSource = new Subject<MessageList[]>;
  public userMessages$ = this.userMessagesSource.asObservable();

  public userMessages:MessageList[] = [];

  addUserMessage(userId:number, message:Message) {
    let currUser = this.userMessages.find(message => message?.userId == userId);
    if(currUser) {
        currUser.messages.push(message);
    } else {
        this.userMessages.push({
            userId,
            messages: [message]
        })
    }
    this.userMessagesSource.next(this.userMessages);
  }
}
