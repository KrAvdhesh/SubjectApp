import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { DataSharingService } from './data-service.service';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.Module';
//'./ngx-cookie-service/public-api';
  
@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataSharingService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

