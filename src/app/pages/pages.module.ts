import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {LicenseComponent} from "./license/license.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {AppModule} from "../app.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    HomeComponent,
    LicenseComponent,
    PrivacyPolicyComponent,
  ],
  exports:[
    FontAwesomeModule,
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    AppModule,
  ]
})
export class PagesModule {
}
