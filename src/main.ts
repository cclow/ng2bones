import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
// Use the new (>rc2) Angular 2 forms
import {
  disableDeprecatedForms,
  provideForms,
} from '@angular/forms';
import { AppComponent } from './app/app.component';
if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
]);
