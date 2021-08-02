import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private/private.component';
import { NoFountComponent } from './core/components/no-fount/no-fount.component';
import { PublicRoutingModule } from './public/public.routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  //{ path: 'public', component: PublicComponent },
  { path: 'private', component: PrivateComponent },
  { path: '', redirectTo: '/public', pathMatch: 'full' },
  { path: '**', component: NoFountComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PublicRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
