import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';
import { BookCard } from '../../components/book-card/book-card';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule,BookCard],
  templateUrl: './book-detail.html',
  styleUrls: ['./book-detail.css']
})
export class BookDetailComponent implements OnInit {

  book?: Book;

  isDeveloperTip = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  otherBooks: Book[] = [];

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      const id = Number(params.get('id'));

      const allBooks = this.bookService.getBooks();

      // update main book
      this.book = allBooks.find(book => book.id === id);

      if (this.book) {
        this.isDeveloperTip =
          this.bookService.isDeveloperPick(this.book.id);
      }

      // update recommended books
      this.otherBooks = allBooks
        .filter(book => book.id !== id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

      // scroll to top for better UX
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    });

  }

}
