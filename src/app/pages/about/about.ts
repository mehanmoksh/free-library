import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';
import { BookCard } from '../../components/book-card/book-card';

@Component({
  standalone: true,
  imports: [CommonModule, BookCard],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks().slice(0,8);
  }

}