import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorSelectComponent } from './components/color-select/color-select.component';
import { ColorHistoryComponent } from './components/color-history/color-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorSelectComponent,
    ColorHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
