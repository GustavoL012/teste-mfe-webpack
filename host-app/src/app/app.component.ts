import { Component } from '@angular/core';
import packageJson from '../../../host-app/package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'host-app';
  angularVersion = packageJson.dependencies['@angular/core'];
}
