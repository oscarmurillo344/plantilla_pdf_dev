import { Injectable ,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  notification:boolean=false;
  usuario = new EventEmitter<string>();
  constructor() { }
}
