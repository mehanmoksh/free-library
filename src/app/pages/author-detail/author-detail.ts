import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../../services/book';
import { BookCard } from '../../components/book-card/book-card';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [BookCard,CommonModule],
  templateUrl: './author-detail.html',
  styleUrl: './author-detail.css',
})
export class AuthorDetailComponent implements OnInit {

  author: string = '';

  books: Book[] = [];

  otherBooks: Book[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      this.author = params.get('name') || '';

      const allBooks = this.bookService.getBooks();

      this.books =
        allBooks.filter(
          book => book.author === this.author
        );

      this.otherBooks =
        allBooks
          .filter(
            book => book.author !== this.author
          )
          .sort(() => Math.random() - 0.5)
          .slice(0, 4);

    });

  }

}