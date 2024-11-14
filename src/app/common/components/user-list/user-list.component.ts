import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserControllerService } from '../../controllers/user-controller.service';
import { User } from '../../types/User.type';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
    public userList: User[] = [];
    public currentUserId = -1;

    constructor(private userControllerService: UserControllerService, private userService: UserService) {
        this.userControllerService.getAllUsers().subscribe((userData: User[]) => {
            this.userList = userData;
            this.userService.userList = userData;
        })
        this.userService.currentUser$.subscribe((id:number) => this.currentUserId = id);
    }

    userSelectHandler(id:number) {
        this.userService.setCurrentUser(id);
    }

    // ngOnDestroy() // TODO[Ankit]: finish


}
