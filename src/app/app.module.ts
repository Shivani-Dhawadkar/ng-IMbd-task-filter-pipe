import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/component/card/card.component';
import { MovieCardPipe } from './shared/pipe/movie-card.pipe';
import { FormsModule } from '@angular/forms';
import { RatingPipe } from './shared/pipe/rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MovieCardPipe,
    RatingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
