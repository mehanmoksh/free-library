import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestReads } from './latest-reads';

describe('LatestReads', () => {
  let component: LatestReads;
  let fixture: ComponentFixture<LatestReads>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestReads]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestReads);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
