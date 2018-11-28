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
    const item = this.colorPool[Math.floor(Math.random() * this.colorPool.length)];
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

  testColors(inputColors: Color[]) {
    // this.nSelectionMatch = 0;
    this.colorsHistory.push(inputColors);
    const colorTest: boolean[] = [];
    let nAlmostMatch = 0;
    let nExactMatch = 0;

    const colorsAnswerCopy: Color[] = this.colorsAnswer.slice();
    const inputColorsCopy: Color[] = inputColors.slice();
    for (let i = colorsAnswerCopy.length - 1; i >= 0; i--) {
      const exactMatch = inputColorsCopy[i] === colorsAnswerCopy[i];
      if (exactMatch) {
        nExactMatch++;
        this.removeColorAtIndex(inputColorsCopy, i);
        this.removeColorAtIndex(colorsAnswerCopy, i);
      }
      colorTest.push(exactMatch);
    }

    for (let i = 0; i < colorsAnswerCopy.length; i++) {
      const indexInInputColorsCopy = inputColorsCopy.indexOf(colorsAnswerCopy[i]);
      if (indexInInputColorsCopy > -1) {
        nAlmostMatch++;
        this.removeColorAtIndex(inputColorsCopy, indexInInputColorsCopy);
      }
    }

    this.results.push({
      nExactMatch: nExactMatch,
      nAlmostMatch: nAlmostMatch
    });

    return colorTest;
  }

  private removeColorAtIndex(colorArray: Color[], zeroBasedIndex: number) {
    colorArray.splice(zeroBasedIndex, 1);
  }
}

export enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
  yellow = 'yellow',
  pink = 'pink',
  black = 'black'
}

export interface MijterMindResult {
  nExactMatch: number;
  nAlmostMatch: number;
}
