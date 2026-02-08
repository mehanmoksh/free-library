import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BookDetailComponent } from './pages/book-detail/book-detail';
import { NotFound } from './pages/not-found/not-found';
import { CategoryPageComponent } from './pages/category-page/category-page';
import { LatestReadsComponent } from './pages/latest-reads/latest-reads';
import { AuthorDetailComponent } from './pages/author-detail/author-detail';
import { AuthorsComponent } from './pages/authors/authors';
import { AllCategoriesComponent } from './pages/all-categories/all-categories';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'book/:id', component: BookDetailComponent },
    { path: 'category/:name', component: CategoryPageComponent },
    { path: 'latest_reads', component: LatestReadsComponent },
    { path: 'authors', component: AuthorsComponent },
    { path: 'authors/:name', component: AuthorDetailComponent },
     { path: 'all_categories', component: AllCategoriesComponent },
     { path: 'categories/:name', component: CategoryPageComponent },
     { path: 'about', component: AboutComponent },
    { path: '**', component: NotFound }
];
