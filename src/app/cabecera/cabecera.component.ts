import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../main/service/local-storage.service';
import { NotificacionService } from './service/notificacion.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls:['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  
  usuario:string="default"

  constructor(private __serviceLocal:LocalStorageService, 
              private router:Router,
              public notificacion:NotificacionService) { }

  ngOnInit(): void {
    if(this.__serviceLocal.getStorage("user"))this.router.navigate(["/listaPDF"])
    this.notificacion.usuario.subscribe(data=>this.usuario=data)
    if(this.__serviceLocal.getStorage("vista"))this.notificacion.notification=this.__serviceLocal.getStorage("vista") as boolean
  }

  logout():void{
    this.__serviceLocal.deleteAllStorage();
    this.notificacion.notification=!this.notificacion.notification
  }

}
