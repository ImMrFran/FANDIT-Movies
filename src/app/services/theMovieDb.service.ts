import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDetailResponse } from '../models/movie-detail-response.model';
import { Movie, MoviesResponse } from '../models/movies-response.model';

@Injectable({
  providedIn: 'root',
})
export class TheMovieDbService {

  // #region PROPERTIES

  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly imagesUrl = 'https://image.tmdb.org/t/p';

  // #endregion

  constructor(private http: HttpClient) { }

  // #region PUBLIC METHODS

  public getMovies(page: number): Observable<MoviesResponse> {
    var url = `${this.baseUrl}/discover/movie`;

    var params = new HttpParams()
      .append('api_key', '' + environment.key)
      .append('sort_by', 'release_date.desc')
      .append('language', 'es-ES')
      .append('page', page);

    return this.http.get<MoviesResponse>(url, { params: params });
  }


  public seachMovie(page: number, query: string): Observable<MoviesResponse> {
    var url = `${this.baseUrl}/search/movie`;

    var params = new HttpParams()
      .append('language', 'es-ES')
      .append('api_key', environment.key)
      .append('page', page)
      .append('query', query)

    return this.http.get<MoviesResponse>(url, { params: params });
  }


  public getMovieDetail(id: string): Observable<MovieDetailResponse> {
    var url = `${this.baseUrl}/movie/${id}`;

    var params = new HttpParams()
    .append('api_key', environment.key)
    .append('language', 'es-ES');

    return this.http.get<MovieDetailResponse>(url, { params: params });
  }


  public getImageUrl(img: string): string {
    return `${this.imagesUrl}/w500${img}`; // sizes: w45, w92, w154, w185, w300, w500, original
  }

  // #endregion
}
