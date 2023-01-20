import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SliderComponent } from './slider/slider.component';
import { TravelModeComponent } from './travel-mode/travel-mode.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { CounterComponent } from './counter/counter.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    SliderComponent,
    TravelModeComponent,
    ServicesComponent,
    TeamComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
