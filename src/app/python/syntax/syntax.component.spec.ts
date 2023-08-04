import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntaxComponent } from './syntax.component';

describe('SyntaxComponent', () => {
  let component: SyntaxComponent;
  let fixture: ComponentFixture<SyntaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyntaxComponent]
    });
    fixture = TestBed.createComponent(SyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
