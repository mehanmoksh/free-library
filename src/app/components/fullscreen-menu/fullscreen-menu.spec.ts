import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenMenu } from './fullscreen-menu';

describe('FullscreenMenu', () => {
  let component: FullscreenMenu;
  let fixture: ComponentFixture<FullscreenMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullscreenMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
