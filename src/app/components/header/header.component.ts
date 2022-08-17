import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  expanded: any = false;

  constructor(private searchService: SearchService, private router: Router) {}

  updateSearch(input: any) {
    this.router.navigate(['/movies']);
    this.searchService.searchEmitter.emit(input.target.value);
  }

  clickBtn() {
    this.expanded = document
      .getElementById('btnCollapse')
      ?.getAttribute('aria-expanded');
  }
}
