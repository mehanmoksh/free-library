import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLauncher } from './category-launcher';

describe('CategoryLauncher', () => {
  let component: CategoryLauncher;
  let fixture: ComponentFixture<CategoryLauncher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryLauncher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryLauncher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
