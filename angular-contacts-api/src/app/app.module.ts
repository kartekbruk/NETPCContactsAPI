import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ShowContactComponent } from './contact/show-contact/show-contact.component';
import { AddEditContactComponent } from './contact/add-edit-contact/add-edit-contact.component';
import { ContactsApiService } from './contacts-api.service';
import { ShowDetailsComponent } from './contact/show-details/show-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ShowContactComponent,
    AddEditContactComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
