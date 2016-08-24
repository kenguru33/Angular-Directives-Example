import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RsSkoyteComponent } from './rs-skoyte/rs-skoyte.component';
import { RsSkoyteListComponent } from './rs-skoyte/rs-skoyte-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RsSkoyteComponent,
    RsSkoyteListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
