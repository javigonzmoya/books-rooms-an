import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const rutasHijas: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full',
      },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(rutasHijas)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
