import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-banner-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-slider.html',
  styleUrls: ['./banner-slider.css']
})
export class BannerSliderComponent implements OnInit {

 
  books: Book[] = [];

  currentIndex = 0;

  touchStartX = 0;
  
  constructor(private bookService: BookService) {}

  ngOnInit() {

    this.books = this.bookService.getBooks();

    setInterval(() => {
      this.nextSlide();
    }, 5000);

  }

  nextSlide() {
    this.currentIndex =
      (this.currentIndex + 1) % this.books.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.books.length)
      % this.books.length;
  }

  // touch swipe mobile + desktop
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {

    const delta =
      event.changedTouches[0].clientX - this.touchStartX;

    if (delta > 50) this.prevSlide();
    if (delta < -50) this.nextSlide();

  }
}
