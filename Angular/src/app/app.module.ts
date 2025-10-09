import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxTabsModule } from 'devextreme-angular/ui/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DxTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
