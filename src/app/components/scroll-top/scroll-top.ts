import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.css'
})
export class ScrollTopComponent {

  visible = false;

  @HostListener('window:scroll')
  onScroll() {

    this.visible = window.scrollY > 300;

  }

  scrollToTop() {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

}