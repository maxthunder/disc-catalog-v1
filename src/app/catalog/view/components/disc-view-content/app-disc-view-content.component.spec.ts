import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDiscViewContentComponent } from './app-disc-view-content.component';

describe('AppDiscViewDetailsComponent', () => {
  let component: AppDiscViewContentComponent;
  let fixture: ComponentFixture<AppDiscViewContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDiscViewContentComponent]
    });
    fixture = TestBed.createComponent(AppDiscViewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
