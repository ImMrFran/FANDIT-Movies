import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDetail } from '../models/movie-detail.model';

@Injectable({
  providedIn: 'root',
})
export class TheMovieDbService {

  // #region PROPERTIES

  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly imagesUrl = 'https://image.tmdb.org/t/p';

  // #endregion

  constructor(private http: HttpClient) {}

  // #region PUBLIC METHODS

  public getMovies(page: number): Observable<any> {
    var url = `${this.baseUrl}/discover/movie`;

    var params = new HttpParams()
      .append('api_key', '' + environment.key)
      .append('sort_by', 'release_date.desc')
      .append('page', page);

    return this.http.get(url, { params: params });
  }


  public seachMovie(query: string): Observable<any> {
    var url = `${this.baseUrl}/search/movie`;

    var params = new HttpParams()
      .append('api_key', environment.key)
      .append('query', query);

    return this.http.get<MovieDetail>(url, { params: params });
  }


  public getMovieDetail(id: string): Observable<MovieDetail> {
    var url = `${this.baseUrl}/movie/${id}`;

    var params = new HttpParams().append('api_key', environment.key);

    return this.http.get<MovieDetail>(url, { params: params });
  }


  public getImageUrl(img: string): string {
    return `${this.imagesUrl}/w500${img}`;
  }

  // #endregion
}
