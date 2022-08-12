import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailResponse } from 'src/app/models/movie-detail-response.model';
import { TheMovieDbService } from 'src/app/services/theMovieDb.service';
import { Utils } from 'src/app/utils/utils.static';

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
        response.status = Utils.translateStatus(response.status);
        response.original_language = Utils.getLanguageFromIso(
          response.original_language
        );
        response.spoken_languages.forEach((language) => {
          language.name = Utils.getLanguageFromIso(language.iso_639_1);
        });
        console.log('-DETAIL-', response);
        this.detail = response;

        // ocultar loading
      }
    });
  }
}
