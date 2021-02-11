import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../main/service/local-storage.service';
import { NotificacionService } from 'src/app/cabecera/service/notificacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Validar:boolean=false
  UserForm:FormGroup
  completar:boolean=true
  hide:boolean=true
  
  constructor(private mensajeToast:ToastrService,
              private route:Router,
              private __serviceLocal:LocalStorageService,
              private notificacion:NotificacionService) {
    this.UserForm=this.crearForm()
   }

  ngOnInit(): void {
  }

   private crearForm():FormGroup{
      return new FormGroup({
        usuario: new FormControl("",Validators.required),
        contrasena: new FormControl("",Validators.required)
      });
    }
     public LogIn():void{
      this.notificacion.notification=!this.notificacion.notification
      this.__serviceLocal.SetStorage(this.UserForm.value.usuario,"user")
      this.__serviceLocal.SetStorage(this.notificacion.notification,"vista")
      this.route.navigate(["/listaPDF"])
    }
}
