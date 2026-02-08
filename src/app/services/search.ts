import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Search {
  private searchText = new BehaviorSubject<string>('');
  private searchSubject = new BehaviorSubject<string>('');

  search$ = this.searchText.asObservable();

  setSearch(value: string) {
    this.searchText.next(value.toLowerCase());
  }

  getCurrentSearch(): string {
    return this.searchSubject.value;
  }
}
