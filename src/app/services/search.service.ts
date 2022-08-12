import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchEmitter: EventEmitter<string> = new EventEmitter<string>();
  search: string;
  page: number = 1;

  constructor() {
    this.searchEmitter.subscribe((search) => {
      this.page = 1;
      this.search = search;
    });
  }
}
