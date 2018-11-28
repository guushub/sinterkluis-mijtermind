import { Component, OnInit } from '@angular/core';
import { ColorManagerService, Color } from '../../services/color-manager.service';

@Component({
  selector: 'app-color-select',
  templateUrl: './color-select.component.html',
  styleUrls: ['./color-select.component.css']
})
export class ColorSelectComponent implements OnInit {
  colorPool: Color[] = [];
  colors: Color[] = [];
  images: string[] = [];

  constructor(private colorManagerService: ColorManagerService) { }

  ngOnInit() {
    this.colorPool = this.colorManagerService.colorPool;
  }

  selectColor(color: Color) {
    if(this.colors.length >= 5) {
      return;
    }
    this.colors.push(color);
    this.setImage(color);
  }

  unselectColor() {
    if(this.colors.length < 1) {
      return;
    }

    this.colors.pop();
    this.images.pop();

  }

  setImage(color: Color) {
    let imgUrl = `/assets/${color}.png`;
    this.images.push(imgUrl);
  }

  reset() {
    this.colors = [];
  }


  testSelection() {
    const testResult = this.colorManagerService.testColors(this.colors);
    console.log(testResult);
    this.reset();
  }

}
