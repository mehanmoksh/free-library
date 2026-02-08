import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-category-launcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-launcher.html',
  styleUrls: ['./category-launcher.css']
})
export class CategoryLauncherComponent {

  isOpen = false;

  categories = [

    { name: 'Finance', icon: 'bi bi-currency-dollar' },
    { name: 'Novel', icon: 'bi bi-book' },
    { name: 'Productivity', icon: 'bi bi-clock' },
    { name: 'Spiritual', icon: 'bi bi-stars' },
    { name: 'Relationships', icon: 'bi bi-heart' }

  ];

  constructor(
    private router: Router,
    private elementRef: ElementRef
  ) {}

  toggleMenu(event?: MouseEvent) {

    if (event) {
      event.stopPropagation();
    }

    this.isOpen = !this.isOpen;

  }


  getTransform(index: number) {

    if (!this.isOpen)
      return 'translate(0px,0px) scale(0)';

    const radius = 170;

    const angleStep = 25;

    const startAngle = 180;

    const angle =
      startAngle + (index * angleStep);

    const rad = angle * Math.PI / 180;

    const x = radius * Math.cos(rad);

    const y = radius * Math.sin(rad);

    return `translate(${x}px, ${y}px) scale(1)`;

  }


  openCategory(category: any) {

    this.isOpen = false;

    this.router.navigate(['/category', category.name]);

  }

  @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {

      const clickedInside =
        this.elementRef.nativeElement.contains(event.target);

      if (!clickedInside) {

        this.isOpen = false;

      }

    }
    
    ngOnInit() {

      window.addEventListener(
        'openCategoryLauncher',
        () => {
          this.isOpen = true;
        }
      );

    }


}
