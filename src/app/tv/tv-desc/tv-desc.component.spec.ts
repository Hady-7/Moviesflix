import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDescComponent } from './tv-desc.component';

describe('TvDescComponent', () => {
  let component: TvDescComponent;
  let fixture: ComponentFixture<TvDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
