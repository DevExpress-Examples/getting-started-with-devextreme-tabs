import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
 
import { DxTabsModule } from "devextreme-angular";
 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxTabsModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }