import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AlbumComponent } from './album/album.component';
import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AlbumComponent,
    MainComponent,
    IntroComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
