import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterApply } from './filterapplication'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterApply
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
