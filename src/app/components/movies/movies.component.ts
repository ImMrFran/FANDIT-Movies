import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movies-response.model';
import { SearchService } from 'src/app/services/search.service';
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

  constructor(
    private theMovieDbService: TheMovieDbService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.loadPage(this.searchService.page);

    this.searchSubscription = this.searchService.searchEmitter.subscribe(
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
    this.searchService.page = page;
    this.movies = [];

    if (this.searchService.search) {
      this.searchMovies();
    } else {
      this.loadMovies();
    }
  }

  private loadMovies() {
    this.theMovieDbService
      .getMovies(this.searchService.page)
      .subscribe((response) => {
        console.log('-MOVIES-', response);
        this.maxpage = response.total_pages < 500 ? response.total_pages : 500;
        response.results.forEach((movie) => {
          movie.imageUrl = movie.poster_path
            ? this.theMovieDbService.getImageUrl(movie.poster_path)
            : '';
        });
        this.movies = response.results;
        this.loading = false;
      });
  }

  private searchMovies() {
    this.theMovieDbService
      .seachMovie(this.searchService.page, this.searchService.search)
      .subscribe((response) => {
        console.log('-SEARCH MOVIES-', response);
        this.maxpage = response.total_pages < 500 ? response.total_pages : 500;
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
    return this.searchService.page;
  }
}
