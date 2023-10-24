import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import { StarRatingModule } from 'angular-star-rating';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    StarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
        StarRatingModule.forRoot()

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
