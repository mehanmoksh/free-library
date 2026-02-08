import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';
import { BookPopupComponent } from '../book-popup/book-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, BookPopupComponent],
  templateUrl: './book-card.html',
  styleUrls: ['./book-card.css']
})

export class BookCard {

  constructor(private router: Router) {}


  @Input() book!: Book;

  @Input() searchTerm: string = '';

  openPopup() {
    this.book.showPopup = true;
    // document.body.classList.add('blur-bg');
  }

  closePopup() {
    this.book.showPopup = false;
    //document.body.classList.remove('blur-bg');
  }

  goToDetail() {
    this.router.navigate(['/book', this.book.id]);
  }

  isMatch(): boolean {

  if (!this.searchTerm) return false;

  return (
    this.book.title.toLowerCase().includes(this.searchTerm) ||
    this.book.author.toLowerCase().includes(this.searchTerm) ||
    this.book.category.join(' ').toLowerCase().includes(this.searchTerm)
  );

}
}
