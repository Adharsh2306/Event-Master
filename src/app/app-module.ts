import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CoreModule } from './core/core-module';
import { SharedModule } from './shared/shared-module';
import { loadingInterceptor } from './core/interceptors/loading-interceptor';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    provideHttpClient(withInterceptors([loadingInterceptor]))
  ],
  bootstrap: [App]
})
export class AppModule { }
