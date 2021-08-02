import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { publicRoutes } from './public.routes';

const routesChildren: Routes = [
  { path: 'public', component: PublicComponent, children: publicRoutes },
];

@NgModule({
  imports: [RouterModule.forChild(routesChildren)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
