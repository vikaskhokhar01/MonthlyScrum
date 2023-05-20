import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthlyScrumHomepageComponent } from './monthly-scrum-homepage/monthly-scrum-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthlyScrumHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
