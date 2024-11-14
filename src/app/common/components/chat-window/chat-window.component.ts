import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Message, MessageList } from '../../types/Message.type';
import { MessagesService } from '../../services/messages.service';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, TextComponent],
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent {
    // TODO[Ankit]: Implement scroll to bottom
    public currentUserId: number = -1;
    public userName: string;

    public chats: Message[] = [];

    constructor(private userService: UserService, private messageService: MessagesService) {
        this.userService.currentUser$.subscribe((userId:number) => {
            this.currentUserId = userId;
            this.userName = userService.userList.find(user => user.id == userId)?.username ?? "Anonymous";
            this.updateChats();
        });

        this.messageService.userMessages$.subscribe((messages: MessageList[]) => {
            this.chats = messages.find((message: MessageList) => message.userId == this.currentUserId)?.messages || [];
        })
    }

    updateChats() {
        this.chats = this.messageService.userMessages.find((message: MessageList) => message.userId == this.currentUserId)?.messages || [];
    }
}
