import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';

import { BookCard } from '../../components/book-card/book-card';


@Component({
  selector: 'app-category-page',
  standalone: true,

  imports: [CommonModule, BookCard],

  templateUrl: './category-page.html',
  styleUrls: ['./category-page.css'],
})
export class CategoryPageComponent implements OnInit {
  categoryName = '';

  categoryBooks: Book[] = [];

  otherBooks: Book[] = [];

  filteredBooks: Book[] = [];

  searchTerm: string = '';

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryName = params.get('name') || '';

      const books = this.bookService.getBooks();

      this.categoryBooks = books.filter((book) =>
        book.category.some(
          (cat) => cat.toLowerCase().trim() === this.categoryName.toLowerCase().trim(),
        ),
      );

      this.otherBooks = books
        .filter(
          (book) =>
            !book.category.some(
              (cat) => cat.toLowerCase().trim() === this.categoryName.toLowerCase().trim(),
            ),
        )
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

      console.log('Selected category:', this.categoryName);
      console.log('Filtered books:', this.categoryBooks);
    });
  
  }
}
