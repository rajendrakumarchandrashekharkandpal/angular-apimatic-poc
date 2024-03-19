import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MbComponent } from './mb/mb.component';
import { SpecComponent } from './spec/spec.component';

@NgModule({
  declarations: [
    AppComponent,
    MbComponent,
    SpecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
