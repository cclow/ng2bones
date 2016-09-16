import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdIconModule, MdIconRegistry} from '@angular2-material/icon';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    MdIconRegistry,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
