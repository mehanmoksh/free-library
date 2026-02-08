import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';
import {BookCard} from '../../components/book-card/book-card';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, BookCard],
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.css']
})
export class NotFound implements OnInit {

  latestBooks: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {

    this.latestBooks =
      this.bookService.getBooks().slice(0, 4);

  }

}
