import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddFunctionalityComponent } from './add-functionality/add-functionality.component';
import { EditFunctionalityComponent } from './edit-functionality/edit-functionality.component';
import { ViewFunctionalityComponent } from './view-functionality/view-functionality.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddFunctionalityComponent,
    EditFunctionalityComponent,
    ViewFunctionalityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
