import { Component, OnInit } from '@angular/core';
import { ColorManagerService } from './services/color-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hasWon = false;

  constructor(private colorManagerService: ColorManagerService) {

  }

  onHasWonChange(hasWon: boolean) {
    this.hasWon = hasWon;
  }

  ngOnInit() {
    this.colorManagerService.closeVault();
  }
}
