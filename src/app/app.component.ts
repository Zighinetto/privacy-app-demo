import {Component} from '@angular/core';
import {environment} from '../../../privacy-app-old/src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'privacy-app';

  public githubUrl = environment.githubUrl;
}
