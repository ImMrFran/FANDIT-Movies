import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheMovieDbService } from 'src/app/services/theMovieDb.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private theMovieDbService: TheMovieDbService, private router: Router) {}

  updateSearch(input: any) {
    this.router.navigate(['/movies'])
    this.theMovieDbService.searchEmitter.emit(input.target.value)
  }
}
