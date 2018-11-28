import { Component, OnInit } from '@angular/core';
import { ColorManagerService, Color, MijterMindResult } from '../../services/color-manager.service';

@Component({
  selector: 'app-color-history',
  templateUrl: './color-history.component.html',
  styleUrls: ['./color-history.component.css']
})
export class ColorHistoryComponent implements OnInit {

  history: Color[][] = [];
  results: MijterMindResult[] = [];

  constructor(private colorManagerService: ColorManagerService) { }

  ngOnInit() {
    this.history = this.colorManagerService.colorsHistory;
    this.results = this.colorManagerService.results;
  }

  



}
