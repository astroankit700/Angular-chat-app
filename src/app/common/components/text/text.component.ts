import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../../types/Message.type';
import { TimeFormatPipe } from '../../pipes/time-format.pipe';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule, TimeFormatPipe],
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
    @Input() message: Message;
    @Input() userName: string;

    constructor() {
    }
    
}
