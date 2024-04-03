import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDiscViewHeaderComponent } from './app-disc-view-header.component';

describe('DiscViewHeaderComponent', () => {
  let component: AppDiscViewHeaderComponent;
  let fixture: ComponentFixture<AppDiscViewHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDiscViewHeaderComponent]
    });
    fixture = TestBed.createComponent(AppDiscViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
