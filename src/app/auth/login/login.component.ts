import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['javier2@gmail.com', [Validators.required]],
      password: [
        'javier',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      remember: [false, [Validators.required]],
    });
  }

  login(){

    if (this.loginForm.invalid){
      console.log(`es invalido`);
      return;
    }
    const {email, password, remember} = this.loginForm.value;

    this.authService.login(email, password, remember).subscribe((resp) => {
      
    })
    
  }
}
