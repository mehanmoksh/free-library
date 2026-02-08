import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';

import { BookCard } from '../../components/book-card/book-card';
import { Search } from '../../services/search';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-latest-reads',

  standalone: true,

  imports: [
    CommonModule,
    BookCard,
    RouterLink
  ],

  templateUrl: './latest-reads.html',
  styleUrls: ['./latest-reads.css']
})
export class LatestReadsComponent implements OnInit {

  books: Book[] = [];

  filteredBooks: Book[] = [];

  searchTerm: string = '';

  showAll = false;

  constructor(private bookService: BookService,private searchService: Search) {}

  ngOnInit() {

    this.books = this.bookService.getBooks();

    this.searchService.search$.subscribe(term => {

      this.searchTerm = term;

      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term) ||
        book.category.join(' ').toLowerCase().includes(term)
      );

    });

  }


  get visibleBooks() {
    return this.showAll
      ? this.filteredBooks
      : this.filteredBooks.slice(0, 8);
  }


  clearSearch() {

    this.searchService.setSearch('');

  }

}