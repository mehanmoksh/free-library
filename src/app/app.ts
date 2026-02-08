import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Search } from './services/search';
import { CategoryLauncherComponent } from './components/category-launcher/category-launcher';
import { Footer } from './components/footer/footer';
import { SocialFloatComponent } from './components/social-float/social-float';
import { ScrollTopComponent } from './components/scroll-top/scroll-top';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,CategoryLauncherComponent,Footer,SocialFloatComponent,ScrollTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('free-library');

  // constructor(private searchService: Search) {}

  // searchText = '';

  // onSearch(value: string) {
  //   this.searchText = value;
  // }
}
