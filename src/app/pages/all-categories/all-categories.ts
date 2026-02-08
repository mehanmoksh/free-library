import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-all-categories',
  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './all-categories.html',
  styleUrls: ['./all-categories.css']
})
export class AllCategoriesComponent implements OnInit {

  categories: string[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {

    const books: Book[] = this.bookService.getBooks();

    this.categories =
      [...new Set(
        books.flatMap(book => book.category)
      )].sort((a, b) =>
        a.localeCompare(b)
      );;

    console.log('Categories:', this.categories);

    
  }

}