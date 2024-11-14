import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserService } from 'src/app/common/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    @ViewChild('chatWindowSpy') private chatWindowSpy:ElementRef;
    public currentUserId: number = -1;

    constructor(private userService: UserService) {
        this.userService.currentUser$.subscribe((userId:number) => this.currentUserId = userId);
    }

}
