import { NgModule,LOCALE_ID } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule} from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import localeEs from '@angular/common/locales/es';
import {registerLocaleData  } from "@angular/common";
import { PdfViewerModule  } from "ng2-pdf-viewer";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListaPDFComponent } from './main/lista-pdf/lista-pdf.component';
import { VistaPdfComponent } from './main/vista-pdf/vista-pdf.component';

import { LocalStorageService } from './main/service/local-storage.service';
import { NotificacionService } from './cabecera/service/notificacion.service';

registerLocaleData(localeEs,"es")

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CabeceraComponent,
    ListaPDFComponent,
    VistaPdfComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    PdfViewerModule,
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass:'toast-top-right',
      preventDuplicates:false
    })
  ],
  providers: [
    {
    provide: LOCALE_ID, useValue: 'es'
    },
    LocalStorageService,
    NotificacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
