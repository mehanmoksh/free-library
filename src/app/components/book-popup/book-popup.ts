import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-popup.html',
  styleUrls: ['./book-popup.css']
})
export class BookPopupComponent {

  constructor(private router: Router) {}

  @Input() book!: Book;
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }

  viewDetail() {
  this.close.emit();
  this.router.navigate(['/book', this.book.id]);
}

}
