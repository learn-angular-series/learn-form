import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChineseMobileValidator } from './form-quick-start/directives/Chinese-mobile-validator.directive';
import { FormQuickStartComponent } from './form-quick-start/form-quick-start.component';

@NgModule({
  declarations: [
    AppComponent,
    ChineseMobileValidator,
    FormQuickStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
