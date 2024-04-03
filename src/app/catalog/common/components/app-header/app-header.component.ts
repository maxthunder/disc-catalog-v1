import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  standalone: true,
})
export class AppHeaderComponent {
  @Input({required: true}) text!: string;
}
