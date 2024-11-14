import { CommonModule } from '@angular/common';
import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { UserService } from '../../services/user.service';
import { MessageControllerService } from '../../controllers/message-controller.service';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent {
    @ViewChild("messageInputSpy") private messageInputRef:ElementRef;

    public currentUserId: number = -1;

    constructor(private messageService: MessagesService, private userService: UserService, private messageController: MessageControllerService) {
        this.userService.currentUser$.subscribe((userId:number) => this.currentUserId = userId);
    }

    sendMessageHandler() {
        // TODO[Ankit]: prevent empty messages from sending
        this.messageService.addUserMessage(this.currentUserId, {
            message: this.messageInputRef?.nativeElement?.value,
            time: Date.now(),
            sentByMe: true
        })
        this.messageInputRef.nativeElement.value = '';
        this.focusElem(this.messageInputRef);
        setTimeout(() => {
            this.receiveMessage();
        }, 200);
    }

    private receiveMessage() {
        this.messageController.receiveMessage().subscribe((message:string) => {
            this.messageService.addUserMessage(this.currentUserId, {
                message,
                time: Date.now()
            });
        })
    }

    focusElem(spy:any, timeout?:number) { setTimeout(()=> spy?.valueAccessor?._elementRef?.nativeElement?.select(), timeout); }

}
