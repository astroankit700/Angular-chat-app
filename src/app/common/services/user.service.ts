import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../types/User.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public userList:User[] = [];

  private currentUserSource = new BehaviorSubject<number>(-1);
  public currentUser$ = this.currentUserSource.asObservable();

  setCurrentUser(id: number) {
    this.currentUserSource.next(id);
  }
}
