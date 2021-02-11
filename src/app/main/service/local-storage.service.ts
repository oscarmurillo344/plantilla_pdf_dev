import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  SetStorage(dato:any,clave:string):void{
    localStorage.setItem(clave,dato)
  }

  getStorage(clave:string):any{
   return localStorage.getItem(clave)?.toString()
  }

  deleteStorage(clave:string):void{
      localStorage.removeItem(clave)
  }

  deleteAllStorage():void{
      localStorage.clear()
  }
}
