import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ResetpaswordComponent } from './components/resetpasword/resetpasword.component';
import { ListmanagerComponent } from './components/listmanager/listmanager.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetpaswordComponent,
    ListmanagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
