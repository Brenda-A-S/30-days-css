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
import { LightComponent } from './components/day-6/light/light.component';
import { TitleComponent } from './components/day-7/title/title.component';
import { TextComponent } from './components/day-8/text/text.component';
import { RainComponent } from './components/day-9/rain/rain.component';
import { IconsComponent } from './components/day-10/icons/icons.component';
import { CardComponent } from './components/day-11/card/card.component';
import { MenuHoverComponent } from './components/day-12/menu-hover/menu-hover.component';
import { HeartButtonComponent } from './components/day-13/heart-button/heart-button.component';
import { ImgsExpandComponent } from './components/day-14/imgs-expand/imgs-expand.component';
import { FloatTextComponent } from './components/day-15/float-text/float-text.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialIconComponent,
    Loader1Component,
    ColorsComponent,
    HomeComponent,
    Button1Component,
    HeartComponent,
    LightComponent,
    TitleComponent,
    TextComponent,
    RainComponent,
    IconsComponent,
    CardComponent,
    MenuHoverComponent,
    HeartButtonComponent,
    ImgsExpandComponent,
    FloatTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
