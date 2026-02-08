import { Component, OnInit } from '@angular/core';
import { BannerSliderComponent } from '../../components/banner-slider/banner-slider';
import { CommonModule } from '@angular/common';
import { BookCard } from '../../components/book-card/book-card';
import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';
import { Search } from '../../services/search';
import { RouterLink } from '@angular/router';
import { SuggestionSectionComponent } from '../../components/suggestion-section/suggestion-section';

@Component({
  selector: 'app-home',
  imports: [CommonModule,BannerSliderComponent, BookCard, RouterLink,SuggestionSectionComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  books: Book[] = [];
  filteredBooks: Book[] = [];
  showAll = false;

  constructor(private bookService: BookService, private searchService: Search) {}

    //featured section - dev's top picks coming from book.ts service
  featuredBooks: Book[] = [];

  //best add on
  bestSpiritualBooks: Book[] = [];
  bestMoneyBooks: Book[] = [];

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.filteredBooks = [...this.books];

    this.featuredBooks = this.bookService.getFeaturedBooks();

    this.searchService.search$.subscribe(text => {
      this.applySearch(text);
    });

    this.bestSpiritualBooks =
      this.bookService.getBestSpiritualBooks();

    this.bestMoneyBooks =
      this.bookService.getBestMoneyBooks();
  }

  applySearch(text: string) {

    const keyword = text.toLowerCase().trim();

    // clear highlights
    this.books.forEach(b => b.highlighted = false);

    if (!keyword) {

      this.filteredBooks = [...this.books];
      this.showAll = false;
      return;

    }

    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(keyword) ||
      book.author.toLowerCase().includes(keyword) ||
      book.category.join(' ').toLowerCase().includes(keyword)
    );

    // highlight matched books
    this.filteredBooks.forEach(book => {
      book.highlighted = true;
    });

    this.showAll = true;

  }


  get visibleBooks() {
    return this.showAll
      ? this.filteredBooks
      : this.filteredBooks.slice(0, 8);
  }

  showMore() {
    this.showAll = true;
  }

  clearSearch() {

    this.searchService.setSearch('');

  }
  
}