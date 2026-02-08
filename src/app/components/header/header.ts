import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { Search } from '../../services/search';
import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';

import { FullscreenMenuComponent } from '../fullscreen-menu/fullscreen-menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FullscreenMenuComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuOpen = false;

  suggestions: Book[] = [];

  showSuggestions = false;

  selectedIndex = -1;

  constructor(
    private searchService: Search,
    private bookService: BookService,
    private router: Router,
  ) {}

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.searchService.setSearch(value);

    if (!value.trim()) {
      this.suggestions = [];
      this.showSuggestions = false;
      return;
    }

    const allBooks = this.bookService.getBooks();

    this.suggestions = allBooks
      .filter((book) => book.title.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 6);

    this.showSuggestions = true;
  }

  selectBook(book: Book) {
    this.showSuggestions = false;

    this.router.navigate(['/book', book.id]);
  }

  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  highlightMatch(text: string): string {
    const term = this.searchInput.nativeElement.value;

    if (!term) return text;

    const regex = new RegExp(`(${term})`, 'gi');

    return text.replace(regex, '<span class="highlight_search_title">$1</span>');
  }


  //recent search

  @ViewChild('searchInput') searchInput!: ElementRef;
  

  ngAfterViewInit() {
    this.searchService.search$.subscribe((value) => {
      if (this.searchInput) {
        this.searchInput.nativeElement.value = value;
      }
    });
  }

  // close search suggestions on clicking outside

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;

    if (!target.closest('.search-container')) {
      this.showSuggestions = false;
    }
  }

  //on clicking / leads to open search bar

  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (event.key === '/') {
      event.preventDefault();
      this.searchInput.nativeElement.focus();
      return;
    }

    if (!this.showSuggestions) return;

    if (event.key === 'ArrowDown') {
      this.selectedIndex = (this.selectedIndex + 1) % this.suggestions.length;
    } else if (event.key === 'ArrowUp') {
      this.selectedIndex =
        (this.selectedIndex - 1 + this.suggestions.length) % this.suggestions.length;
    } else if (event.key === 'Enter') {
      if (this.selectedIndex >= 0) {
        this.selectBook(this.suggestions[this.selectedIndex]);
      }
    }
  }


  clearSearch() {
    this.searchInput.nativeElement.value = '';

    this.searchService.setSearch('');

    this.suggestions = [];

    this.showSuggestions = false;

    this.selectedIndex = -1;

    this.searchInput.nativeElement.focus();
  }
}
