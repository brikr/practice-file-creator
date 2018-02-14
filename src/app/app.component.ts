import { Component } from '@angular/core';

import { faDiscord, faGithub, faTwitter } from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SM64 Practice File Creator';
  faDiscord = faDiscord;
  faGithub = faGithub;
  faTwitter = faTwitter;
}
