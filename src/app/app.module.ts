import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './Componednts/HomepageComponent/header-section/header-section.component';
import { HomepageComponent } from './Componednts/HomepageComponent/homepage/homepage.component';
import { NavBarComponent } from './Componednts/HomepageComponent/nav-bar/nav-bar.component';
import { AboutSectionComponent } from './Componednts/HomepageComponent/about-section/about-section.component';
import { RentCardsComponent } from './Componednts/HomepageComponent/rent-cards/rent-cards.component';
import { WeAspireComponent } from './Componednts/HomepageComponent/we-aspire/we-aspire.component';
import { SalesCardsComponent } from './Componednts/HomepageComponent/sales-cards/sales-cards.component';
import { BlogsCardComponent } from './Componednts/HomepageComponent/blogs-card/blogs-card.component';
import { FooterComponent } from './Componednts/HomepageComponent/footer/footer.component';
import { DreamHomeComponent } from './Componednts/HomepageComponent/dream-home/dream-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    HomepageComponent,
    NavBarComponent,
    AboutSectionComponent,
    RentCardsComponent,
    WeAspireComponent,
    SalesCardsComponent,
    BlogsCardComponent,
    FooterComponent,
    DreamHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
