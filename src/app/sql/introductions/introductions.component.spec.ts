import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionsComponent } from './introductions.component';

describe('IntroductionsComponent', () => {
  let component: IntroductionsComponent;
  let fixture: ComponentFixture<IntroductionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroductionsComponent]
    });
    fixture = TestBed.createComponent(IntroductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
