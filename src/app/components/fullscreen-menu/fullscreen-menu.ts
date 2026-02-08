import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fullscreen-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fullscreen-menu.html',
  styleUrls: ['./fullscreen-menu.css']
})
export class FullscreenMenuComponent {

  @Output() close = new EventEmitter<void>();

  closeMenu() {
    this.close.emit();
  }

}