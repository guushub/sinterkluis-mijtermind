import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-fireworks',
  templateUrl: './fireworks.component.html',
  styleUrls: ['./fireworks.component.css']
})
export class FireworksComponent {
  private _hasWon: boolean;
  @Input() set hasWon(hasWon: boolean) {
    this._hasWon = hasWon;
    if (hasWon) {
      const fireworksAudio = new Audio();
      fireworksAudio.src = '../../../assets/fireworks.mp3';
      fireworksAudio.loop = true;
      fireworksAudio.load();
      fireworksAudio.play();
    }
  }
  get hasWon() {
    return this._hasWon;
  }
}
