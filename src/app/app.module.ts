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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GoogleMapComponent } from './google-map/google-map.component';

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
    RegistrationComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
