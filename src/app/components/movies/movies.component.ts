import { Component, OnInit } from '@angular/core';
import { TheMovieDbService } from 'src/app/services/theMovieDb.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies = null;

  constructor(private theMovieDbService: TheMovieDbService) {}

  ngOnInit(): void {
    this.loadMovies(1);
  }

  public loadMovies(page: number) {
    this.theMovieDbService.getMovies(page).subscribe((response) => {
      console.log('-MOVIES-', response);

      if (!response) {
        // mostrar loading
      } else {
        this.movies = response;
        // ocultar loading
      }
    });
  }
}
