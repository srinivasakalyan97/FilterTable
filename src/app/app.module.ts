import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterApply } from './filterapplication'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownfilterComponent } from './components/dropdownfilter/dropdownfilter.component';
import { FilterRepeated } from './filterrepeated';

@NgModule({
  declarations: [
    AppComponent,
    FilterApply,
    DropdownfilterComponent,
    FilterRepeated
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
