import { Component, OnInit } from '@angular/core';
import { NotificacionService } from 'src/app/cabecera/service/notificacion.service';
import { Listapdf } from '../clases/Listapdf';
import { LocalStorageService } from '../service/local-storage.service';
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-lista-pdf',
  templateUrl: './lista-pdf.component.html'
})
export class ListaPDFComponent implements OnInit {
 
  displayedColumns:string[]=["posicion","nombre","fecha","documento","descargar"]
  Listapdf:Array<Listapdf>
  entrada:number=0
  constructor(private __servicioLocal:LocalStorageService,
              private notificacion:NotificacionService) {
    this.Listapdf=new Array()
   }

  ngOnInit(): void {
    this.notificacion.usuario.emit(this.__servicioLocal.getStorage("user"))
    this.Listapdf.push(new Listapdf("documento 1","../../../assets/PDF/deber2.pdf",new Date))
    this.Listapdf.push(new Listapdf("documento 2","../../../assets/PDF/Taller2.pdf",new Date))
    this.Listapdf.push(new Listapdf("documento 3","../../../assets/PDF/Tarea4.pdf",new Date))
    this.Listapdf.push(new Listapdf("documento 4","../../../assets/PDF/Tarea5.pdf",new Date))
    this.Listapdf.push(new Listapdf("documento 5","../../../assets/PDF/Tarea5.pdf",new Date))
    this.Listapdf.push(new Listapdf("documento 6","../../../assets/PDF/Tarea5.pdf",new Date))
    this.Listapdf.push(new Listapdf("documento 7","../../../assets/PDF/Tarea5.pdf",new Date))
  }

  descargarPDF():void{
    let url:string=this.Listapdf[0].documento;
    const pdf = new jsPDF("p","mm","a4")
    const reader = new FileReader()
    pdf.text("aqui descargara el pdf conrrespondiente",10,10)
    pdf.save("test.pdf")
  }

}
