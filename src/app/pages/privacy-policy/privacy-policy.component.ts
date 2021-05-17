import {Component, Input} from '@angular/core';
import {faExclamation} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent {

  public warning = faExclamation;


}
