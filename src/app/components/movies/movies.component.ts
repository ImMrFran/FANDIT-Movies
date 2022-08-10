import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movies-response.model';
import { TheMovieDbService } from 'src/app/services/theMovieDb.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  page: number;
  maxpage: number;
  movies: Array<Movie> = [];

  constructor(public theMovieDbService: TheMovieDbService) {}

  ngOnInit(): void {
    this.page = 1;
    this.loadMovies(this.page);
  }

  public loadMovies(page: number) {
    this.page = page;
    this.movies = [];
    this.theMovieDbService.getMovies(page).subscribe((response) => {
      console.log('-MOVIES-', response);

      if (!response) {
        // mostrar loading
      } else {
        this.maxpage = response.total_pages;
        response.results.forEach((movie) => {
          movie.imageUrl = movie.poster_path
            ? this.theMovieDbService.getImageUrl(movie.poster_path)
            : '';
        });
        this.movies = response.results;
        // ocultar loading
      }
    });
  }

  public goDetail(id: number) {
    console.log('CLICCKk');
  }
}
