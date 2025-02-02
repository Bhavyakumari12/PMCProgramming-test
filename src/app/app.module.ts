import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { TemplateAssignmentComponent } from './template-assignment/template-assignment.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, TemplateAssignmentComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
