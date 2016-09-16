import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MdRippleModule, PortalModule, OverlayModule, RtlModule} from '@angular2-material/core';
import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdIconModule, MdIconRegistry} from '@angular2-material/icon';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdRadioModule} from '@angular2-material/radio';
import {MdInputModule} from '@angular2-material/input';
import {MdListModule} from '@angular2-material/list';
import {MdGridListModule} from '@angular2-material/grid-list';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdTabsModule} from '@angular2-material/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdSliderModule} from '@angular2-material/slider';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdProgressBarModule} from '@angular2-material/progress-bar';
import {MdMenuModule} from '@angular2-material/menu';
import {MdButtonToggleModule} from '@angular2-material/button-toggle';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle';

import {AppComponent} from './app.component';
import {MdDemoComponent} from "./md-demo.component";

@NgModule({
  imports: [
    BrowserModule,
    MdCardModule.forRoot(),
    MdButtonModule.forRoot(),
    MdIconModule.forRoot(),
    MdCheckboxModule.forRoot(),
    MdRadioModule.forRoot(),
    MdInputModule.forRoot(),
    MdListModule.forRoot(),
    MdGridListModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdTabsModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdSliderModule.forRoot(),
    MdProgressCircleModule.forRoot(),
    MdProgressBarModule.forRoot(),
    MdButtonToggleModule.forRoot(),
    MdSlideToggleModule.forRoot(),
    MdMenuModule.forRoot(),
    MdRippleModule.forRoot(),
    PortalModule.forRoot(),
    OverlayModule.forRoot(),
    RtlModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    MdDemoComponent,
  ],
  providers: [
    MdIconRegistry,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
