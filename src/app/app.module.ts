import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FaConfig, FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule,
  ],
  exports: [
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(fa: FaIconLibrary, faConfig: FaConfig) {
    fa.addIconPacks(fab, fas, far);
    faConfig.fixedWidth = true;
  }
}
