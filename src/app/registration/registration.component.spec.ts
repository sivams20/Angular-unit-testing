import {
  ComponentFixture,
  TestBed,
  async,
  waitForAsync,
} from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [RegistrationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid on init', () => {
    expect(component.registraionForm.valid).toBeFalsy();
  });

  it('email field default validity', () => {
    let email = component.registraionForm.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors;
    let email = component.registraionForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('email should be valid', waitForAsync(() => {
    let email = component.registraionForm.controls['email'];
    email.setValue('sivams20@gmail.com');
    expect(email.valid).toBeTruthy();
  }));

  it('password field validity', () => {
    let errors;
    let password = component.registraionForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('password should be valid', waitForAsync(() => {
    let password = component.registraionForm.controls['password'];
    password.setValue('abcdefghijklmn');
    expect(password.valid).toBeTruthy();
  }));

  it('confirm password should be valid', waitForAsync(() => {
    let confirmpassword = component.registraionForm.controls['confirmpassword'];
    confirmpassword.setValue('abcdefghijklmn');
    expect(confirmpassword.valid).toBeTruthy();
  }));

  it('Check the form validity', () => {
    expect(component.registraionForm.valid).toBeFalsy();
    component.registraionForm.controls['email'].setValue('test@test.com');
    component.registraionForm.controls['password'].setValue('123456789');
    component.registraionForm.controls['confirmpassword'].setValue('123456789');
    fixture.detectChanges();
    expect(component.registraionForm.valid).toBeTruthy();
  });
});
