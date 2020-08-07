import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {ExperienciasService} from 'src/app/_services/experiencias.service';
import {Experiencias} from 'src/app/_models/experiencias'
import { Router } from '@angular/router';


@Component({
  selector: 'añadir-root',
  templateUrl: './añadir.component.html',
  styleUrls: ['./añadir.component.css'],
  providers:[ExperienciasService]
})
export class AñadirComponent implements OnInit  {

constructor(public servicios:ExperienciasService,public router:Router){}
@ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = [];
  ngOnInit() {

  }

  FileSelected=File=null;

  OnFileSelected(event){
    this.FileSelected=<File>event.target.files[0]
    console.log(this.FileSelected)
  }

  onSubmit(){
    var formulario=this.servicios.formularioExperiencias.value;
    console.log("---------")
    console.log(formulario)

    let fd = new FormData();

    fd.append('imagen',this.FileSelected);
    fd.append('titulo',formulario.titulo);
    fd.append('descripcion',formulario.descripcion);
    fd.append('salaRef',formulario.salaRef);

    this.servicios.añadir(fd).subscribe(

      (res:any)=>{
        console.log(res)
        if(res){
          this.router.navigate(['/'])
        }
        else if(!res.ok){
          alert("fallo")
        }

      },
      error =>{

          console.log(error)
      }
    )
  }



}
