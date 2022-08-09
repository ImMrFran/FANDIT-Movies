import { Component, OnInit } from '@angular/core';
import { TheMovieDbService } from 'src/app/services/theMovieDb.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  seach = null;

  constructor(private theMovieDbService: TheMovieDbService) {}

  ngOnInit(): void {
    this.theMovieDbService.seachMovie('Batman').subscribe((response) => {
      console.log('-HEADER-', response);

      if (!response) {
        // mostrar loading
      } else {
        this.seach = response;
        // ocultar loading
      }
    });
  }
}
