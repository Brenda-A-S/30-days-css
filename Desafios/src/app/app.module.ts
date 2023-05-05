import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';

import { SocialIconComponent } from './components/day-1/social-icon/social-icon.component';
import { Loader1Component } from './components/day-2/loader1/loader1.component';
import { ColorsComponent } from './components/day-3/colors/colors.component';
import { Button1Component } from './components/day-4/button1/button1.component';
import { HeartComponent } from './components/day-5/heart/heart.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialIconComponent,
    Loader1Component,
    ColorsComponent,
    HomeComponent,
    Button1Component,
    HeartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
