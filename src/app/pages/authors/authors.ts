import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './authors.html',
  styleUrl: './authors.css',
})
export class AuthorsComponent implements OnInit {

  authors: string[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {

    const books = this.bookService.getBooks();

    this.authors =
      [...new Set(
        books.map(book => book.author)
      )].sort((a, b) =>
        a.localeCompare(b)
      );;

  }

}