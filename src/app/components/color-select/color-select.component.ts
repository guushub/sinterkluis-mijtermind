import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ColorManagerService, Color } from '../../services/color-manager.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.css']
})
export class ColorSelectComponent implements OnInit {
  @Output() hasWonChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  colorPool: Color[] = [];
  colors: Color[] = [];
  images: string[] = [];

  @HostListener('document:keydown.backspace', ['$event'])
  handleBackspaceKeydown() {
    this.unselectColor();
  }

  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKeydown() {
    if (this.colors.length === 5) {
      this.testSelection();
    }
  }

  constructor(private colorManagerService: ColorManagerService) { }

  ngOnInit() {
    this.colorPool = this.colorManagerService.colorPool;
  }

  selectColor(color: Color) {
    if (this.colors.length >= 5) {
      return;
    }
    this.colors.push(color);
    this.setImage(color);
  }

  unselectColor() {
    if (this.colors.length < 1) {
      return;
    }

    this.colors.pop();
    this.images.pop();

  }

  setImage(color: Color) {
    const imgUrl = `/assets/${color}.png`;
    this.images.push(imgUrl);
  }

  reset() {
    this.colors = [];
  }


  testSelection() {
    const testResult = this.colorManagerService.testColors(this.colors);
    const allAnswersWereCorrect = testResult.indexOf(false) === -1;
    this.hasWonChange.emit(allAnswersWereCorrect);
    console.log(testResult);

    if (!allAnswersWereCorrect) {
      this.reset();
    }
  }

  restart() {
    this.colorManagerService.reset();
  }

}
