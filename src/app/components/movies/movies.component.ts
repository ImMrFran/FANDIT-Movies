import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movies-response.model';
import { TheMovieDbService } from 'src/app/services/theMovieDb.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {

  loading: boolean = true;
  maxpage: number;
  movies: Array<Movie> = [];
  searchSubscription: Subscription;

  constructor(public theMovieDbService: TheMovieDbService) {}

  ngOnInit(): void {
    this.loadPage(this.theMovieDbService.page);

    this.searchSubscription = this.theMovieDbService.searchEmitter.subscribe(
      (search) => {
        console.log('-search-', search);
        this.loadPage(1);
      }
    );
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  public loadPage(page: number) {
    this.loading = true;
    this.theMovieDbService.page = page;
    this.movies = [];

    if (this.theMovieDbService.search) {
      this.searchMovies();
    } else {
      this.loadMovies();
    }
  }

  public loadMovies() {
    this.theMovieDbService.getMovies(this.theMovieDbService.page).subscribe((response) => {
      console.log('-MOVIES-', response);
      this.maxpage = response.total_pages;
      response.results.forEach((movie) => {
        movie.imageUrl = movie.poster_path
          ? this.theMovieDbService.getImageUrl(movie.poster_path)
          : '';
      });
      this.movies = response.results;
      this.loading = false;
    });
  }

  public searchMovies() {
    this.theMovieDbService
      .seachMovie(this.theMovieDbService.page, this.theMovieDbService.search)
      .subscribe((response) => {
        console.log('-SEARCH MOVIES-', response);
        this.maxpage = response.total_pages;
        response.results.forEach((movie) => {
          movie.imageUrl = movie.poster_path
            ? this.theMovieDbService.getImageUrl(movie.poster_path)
            : '';
        });
        this.movies = response.results;
        this.loading = false;
      });
  }

  public goDetail(id: number) {
    console.log('CLICCKk');
  }

  public getPage() {
    return this.theMovieDbService.page
  }
}
