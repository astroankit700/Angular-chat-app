import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime',
  standalone: true
})
export class TimeFormatPipe implements PipeTransform {
    transform(milliseconds: number): string {
        const date = new Date(milliseconds);

        const hours = date.getHours();
        const minutes = date.getMinutes();

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}`;
    }

}
