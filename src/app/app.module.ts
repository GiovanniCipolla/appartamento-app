import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { AppartamentoListComponent } from './features/appartamento/appartamento-list/appartamento-list.component';
import { AppartamentoDetailComponent } from './features/appartamento/appartamento-detail/appartamento-detail.component';
import { AppartamentoDeleteComponent } from './features/appartamento/appartamento-delete/appartamento-delete.component';
import { AppartamentoInsertComponent } from './features/appartamento/appartamento-insert/appartamento-insert.component';
import { FormsModule } from '@angular/forms';
import { AppartamentoEditComponent } from './features/appartamento/appartamento-edit/appartamento-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    AppartamentoListComponent,
    FooterComponent,
    AppartamentoDetailComponent,
    AppartamentoDeleteComponent,
    AppartamentoInsertComponent,
    AppartamentoEditComponent
  ],
  // controllare imports, può capiatre che non importi automaticamente le cose
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
