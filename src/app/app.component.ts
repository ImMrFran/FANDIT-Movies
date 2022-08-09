import { Component } from '@angular/core';
import { TheMovieDbService } from './services/theMovieDb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fandit-movies';
}
