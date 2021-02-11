import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ListaPDFComponent } from './main/lista-pdf/lista-pdf.component';
import { VistaPdfComponent } from './main/vista-pdf/vista-pdf.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'listaPDF',component:ListaPDFComponent},
  {path:'vistapdf/:pdf',component:VistaPdfComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
