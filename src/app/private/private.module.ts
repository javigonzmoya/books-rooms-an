import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

@NgModule({
  declarations: [PrivateComponent, HomeScreenComponent],
  imports: [CommonModule],
})
export class PrivateModule {}
