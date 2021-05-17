import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PrivacyPolicyComponent} from './pages/privacy-policy/privacy-policy.component';
import {LicenseComponent} from './pages/license/license.component';


const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'privacy', component: PrivacyPolicyComponent},
  {path: 'license', component: LicenseComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
