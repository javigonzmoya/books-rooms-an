import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authRoutes } from './auth.routes';

const rutasHijas: Routes = [
  {
    path: 'auth',
    children: authRoutes,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(rutasHijas)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
