import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestViewComponent } from './test-view/test-view.component';
import { ConnectComponent } from './connect/connect.component';
import { FooterComponent } from './footer/footer.component';
import { SearchTravelComponent } from './search-travel/search-travel.component';
import { RegistrationComponent } from './registration/registration.component';

// creation des routes / url
const appRoutes: Routes = [
  { path: 'test', component: TestViewComponent },
  { path: 'search-travel', component: SearchTravelComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'connect', component: ConnectComponent },
  { path: '', component: TestViewComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestViewComponent,
    ConnectComponent,
    FooterComponent,
    SearchTravelComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
