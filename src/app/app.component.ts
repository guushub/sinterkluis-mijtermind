import { Component, OnInit } from '@angular/core';
import { ColorManagerService } from './services/color-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private colorManagerService: ColorManagerService) {

  }
  
  ngOnInit() {
    this.colorManagerService.closeVault();
  }
}
