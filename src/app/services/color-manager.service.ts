import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorManagerService {

  private nColors = 5;
  colorPool: Color[] = [Color.red, Color.green, Color.blue, Color.yellow, Color.pink, Color.black];
  colorsAnswer: Color[] = [];
  colorsHistory: Color[][] = [];
  results: MijterMindResult[] = [];
  // nSelectionMatch = 0;

  constructor() { 
    this.reset();
  }

  selectRandom() {
    const item = this.colorPool[Math.floor(Math.random()*this.colorPool.length)];
    return item;
  }

  reset() {
    // this.nSelectionMatch = 0;
    this.colorsHistory = [];
    this.results = [];
    this.colorsAnswer = [];
    for (let i = 0; i < this.nColors; i++) {
      const color = this.selectRandom();
      this.colorsAnswer.push(color); 
    }
  }

  testColors(colors: Color[]) {
    // this.nSelectionMatch = 0;
    this.colorsHistory.push(colors);
    const colorTest: boolean[] = [];
    let nAlmostMatch = 0;
    let nExactMatch = 0;

    for (let i = 0; i < this.nColors; i++) {
      if(i >= colors.length) {
        colorTest.push(false);
        continue;
      }
      const color = colors[i];
      

      const exactMatch = this.colorsAnswer[i] === color
      colorTest.push(exactMatch);

      if(exactMatch) {
        nExactMatch++;
      } else if(this.colorsAnswer.indexOf(color) > -1) {
        // this.nSelectionMatch++;
        nAlmostMatch++;
      }

    }
    this.results.push({
      nExactMatch: nExactMatch,
      nAlmostMatch: nAlmostMatch
    });

    return colorTest;
  }

}

export enum Color {
  red = "red", 
  green = "green", 
  blue = "blue", 
  yellow = "yellow", 
  pink = "pink", 
  black = "black"
}

export interface MijterMindResult {
  nExactMatch: number; 
  nAlmostMatch: number;
}