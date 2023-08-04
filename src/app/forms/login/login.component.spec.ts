import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponents } from './login.component';


describe('LoginComponents', () => {
  let component: LoginComponents;
  let fixture: ComponentFixture<LoginComponents>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponents]
    });
    fixture = TestBed.createComponent(LoginComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
