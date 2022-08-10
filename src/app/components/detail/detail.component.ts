import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetailResponse } from 'src/app/models/movie-detail-response.model';
import { TheMovieDbService } from 'src/app/services/theMovieDb.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  detail: MovieDetailResponse;

  constructor(
    private route: ActivatedRoute,
    private theMovieDbService: TheMovieDbService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') ?? '';
    this.theMovieDbService.getMovieDetail(id).subscribe((response) => {
      if (!response) {
        // mostrar loading
      } else {
        response.imageUrl = response.poster_path
          ? this.theMovieDbService.getImageUrl(response.poster_path)
          : '';
        console.log('-DETAIL-', response);
        this.detail = response;

        // ocultar loading
      }
    });
  }
}
