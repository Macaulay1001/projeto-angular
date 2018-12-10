import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppRoutingModule } from './app-routing.module';
import { LoguinComponent } from './loguin/loguin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoguinComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
