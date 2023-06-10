import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { AppartamentoListComponent } from './features/appartamento/appartamento-list/appartamento-list.component';
import { AppartamentoDetailComponent } from './features/appartamento/appartamento-detail/appartamento-detail.component';
import { AppartamentoDeleteComponent } from './features/appartamento/appartamento-delete/appartamento-delete.component';
import { AppartamentoInsertComponent } from './features/appartamento/appartamento-insert/appartamento-insert.component';
import { AppartamentoEditComponent } from './features/appartamento/appartamento-edit/appartamento-edit.component';

const routes: Routes = [  { path: 'welcome', component: WelcomeComponent },
{ path: 'appartamento/list', component: AppartamentoListComponent },
{ path: 'appartamento/detail/:id', component: AppartamentoDetailComponent },
{ path: 'appartamento/delete/:id', component: AppartamentoDeleteComponent },
{ path: 'appartamento/insert', component: AppartamentoInsertComponent },
{ path: 'appartamento/edit/:id', component: AppartamentoEditComponent },
{ path: '', redirectTo: '/welcome', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
