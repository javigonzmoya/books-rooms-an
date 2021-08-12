import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Modulos:
import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
import { PrivateModule } from './private/private.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenHeadersInterceptor } from './core/interceptors/TokenHeadersInterceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PrivateModule, BrowserAnimationsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenHeadersInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}