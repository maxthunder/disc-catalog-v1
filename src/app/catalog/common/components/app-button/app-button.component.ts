import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.css'],
  standalone: true,
  imports: [MatButtonModule],
})
export class AppButtonComponent {
  @Input() color: string = 'primary';
}
