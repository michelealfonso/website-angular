import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { StatsComponent } from './components/stats/stats.component';
import { BusinessComponent } from './components/business/business.component';
import { BillingComponent } from './components/billing/billing.component';
import { CardDealComponent } from './components/card-deal/card-deal.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesComponent } from './components/features/features.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';


import {MatIconModule} from '@angular/material/icon';

import { AnchorDirective } from './directives/anchor/anchor.directive';
import { ManagerDirective } from './directives/manager/manager.directive';
import { SelectionDirective } from './directives/selection/selection.directive';
import { ScrollToDirective } from './directives/scrollTo/scroll-to.directive';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    StatsComponent,
    BusinessComponent,
    BillingComponent,
    CardDealComponent,
    TestimonialsComponent,
    ClientsComponent,
    CtaComponent,
    FooterComponent,
    HomeComponent,
    FeaturesComponent,
    ProductComponent,
    AboutComponent,
    AnchorDirective,
    ManagerDirective,
    SelectionDirective,
    ScrollToDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
        data: { animation: 'HomePage'}
      },
      {
        path: 'features',
        component: FeaturesComponent,
        data: { animation: 'FeaturesPage'}
      },
      {
        path: 'product',
        component: ProductComponent,
        data: { animation: 'ProductPage'}
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { animation: 'AboutPage'}
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
