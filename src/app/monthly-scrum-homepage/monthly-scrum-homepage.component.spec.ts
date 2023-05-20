import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyScrumHomepageComponent } from './monthly-scrum-homepage.component';

describe('MonthlyScrumHomepageComponent', () => {
  let component: MonthlyScrumHomepageComponent;
  let fixture: ComponentFixture<MonthlyScrumHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyScrumHomepageComponent]
    });
    fixture = TestBed.createComponent(MonthlyScrumHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
