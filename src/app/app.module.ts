import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './commons/tokenInterceptor';
// Components
import { AppComponent } from './app.component';
import { SigninComponent } from './components/users/signin/signin.component';
import { SignupComponent } from './components/users/signup/signup.component';
// Services
import { UsersService } from './services/users.service'
// Modules
import { AppRoutingModule } from './modules/app-routing.module'
import { materialModule } from './modules/material'

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    materialModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    UsersService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
