import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music-progress',
  templateUrl: './music-progress.component.html',
  styleUrls: ['./music-progress.component.css']
})
export class MusicProgressComponent {

  @Input() elapsed: string;
  @Input() total: string;
  @Input() current: number;

}
