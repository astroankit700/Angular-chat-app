import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../types/User.type';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor() { }

  getAllUsers(): Observable<User[]> {
    return of([
        { "id": 1, "username": "Alice" },
        { "id": 2, "username": "Bob" },
        { "id": 3, "username": "Charlie" },
        { "id": 4, "username": "Diana" },
        { "id": 5, "username": "Eve" },
        { "id": 6, "username": "Frank" },
        { "id": 7, "username": "Grace" },
        { "id": 8, "username": "Hank" },
        { "id": 9, "username": "Ivy" },
        { "id": 10, "username": "Jack" },
        { "id": 11, "username": "Kara" },
        { "id": 12, "username": "Leo" },
        { "id": 13, "username": "Mona" },
        { "id": 14, "username": "Nina" },
        { "id": 15, "username": "Oscar" },
        { "id": 16, "username": "Paul" },
        { "id": 17, "username": "Quinn" },
        { "id": 18, "username": "Ruby" },
        { "id": 19, "username": "Sam" },
        { "id": 20, "username": "Tina" },
        { "id": 21, "username": "Uma" },
        { "id": 22, "username": "Victor" },
        { "id": 23, "username": "Wendy" },
        { "id": 24, "username": "Xander" },
        { "id": 25, "username": "Yara" },
        { "id": 26, "username": "Zane" },
      ])
  }
}
