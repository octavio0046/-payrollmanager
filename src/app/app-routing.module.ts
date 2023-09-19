import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListmanagerComponent } from './components/listmanager/listmanager.component';
import { ResetpaswordComponent } from './components/resetpasword/resetpasword.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'listmanager', component: ListmanagerComponent },
  { path: 'resetpasword', component: ResetpaswordComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Puedes agregar más rutas aquí
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
