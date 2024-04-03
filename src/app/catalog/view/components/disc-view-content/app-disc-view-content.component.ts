import { Component } from '@angular/core';
import { AppButtonComponent } from 'src/app/catalog/common/components/app-button/app-button.component';
import { Input } from '@angular/core';
import { Disc } from 'src/app/catalog/common/@types/disc';

@Component({
  selector: 'app-disc-view-content',
  templateUrl: './app-disc-view-content.component.html',
  styleUrls: ['./app-disc-view-content.component.css'],
  standalone: true,
  imports: [AppButtonComponent],
})
export class AppDiscViewContentComponent {
  @Input({required: true}) disc!  : Disc;
  // yooo() {
  //   alert('yooo');
  // }
}
