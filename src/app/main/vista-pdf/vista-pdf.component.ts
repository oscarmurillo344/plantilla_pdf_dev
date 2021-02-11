import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-vista-pdf',
  templateUrl: './vista-pdf.component.html',
  styleUrls: ['./vista-pdf.component.css']
})
export class VistaPdfComponent implements OnInit {
  
  pdfstring:string
  constructor(private rutaActiva: ActivatedRoute) { 
    this.pdfstring=this.rutaActiva.snapshot.params.pdf
  }

  ngOnInit(): void {
  
  }

}
