import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './screens/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemCardComponent } from './components/item-card/item-card.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HomeComponent,
    NavbarComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
