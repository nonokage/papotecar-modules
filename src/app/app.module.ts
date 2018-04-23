import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestViewComponent } from './test-view/test-view.component';
import { ConnectComponent } from './connect/connect.component';
import { FooterComponent } from './footer/footer.component';

// creation des routes / url
const appRoutes: Routes = [
  { path: 'test', component: TestViewComponent },
  { path: 'connect', component: ConnectComponent },
  { path: '', component: TestViewComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestViewComponent,
    ConnectComponent,
    FooterComponent
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
