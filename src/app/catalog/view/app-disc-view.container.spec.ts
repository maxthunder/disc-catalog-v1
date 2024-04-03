import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDiscViewContainer } from './app-disc-view.container';

describe('AppDiscViewContainerComponent', () => {
  let component: AppDiscViewContainer;
  let fixture: ComponentFixture<AppDiscViewContainer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDiscViewContainer]
    });
    fixture = TestBed.createComponent(AppDiscViewContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
