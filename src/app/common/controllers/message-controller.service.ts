import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageControllerService {

  constructor() { }

  receiveMessage(): Observable<string> {
    const responses = [
        "I'm in the middle of something. Can we catch up later?",
        "Can I get back to you in a bit?",
        "Busy right now, but I'll message you as soon as I'm free.",
        "Can we chat later? I'm tied up for now.",
        "Sorry, can't talk right now. I'll call you when I'm available.",
        "Let's connect in a bit! I'll reach out soon.",
        "I'll be free in an hour or so. Can we talk then?",
        "Caught up at the moment, but I'll message you later.",
        "Let's reschedule our chat for later. I'll ping you!",
        "Not a good time right now. Can I call you back?"
      ];
      return of(responses[Math.floor(Math.random() * 10)])
  }
}
