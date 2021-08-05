import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['javi@gmail.com', [Validators.required]],
      password: [
        '123456',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      remember: [false, [Validators.required]],
    });
  }
}
