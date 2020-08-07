import { Component,OnInit } from '@angular/core';
import {ExperienciasService} from 'src/app/_services/experiencias.service';
import {Experiencias} from 'src/app/_models/experiencias'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'listar-root',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers:[ExperienciasService]
})
export class ListarComponent implements OnInit  {


constructor(public servicios:ExperienciasService){}
name = new FormControl('')


  ngOnInit() {
    this.listarTodo()
  }
  title = 'frontExploraAPI';
  clickMessage = '';
  experiencias:Object;

  listarTodo(){
 this.servicios.listarTodo().subscribe(
      (res)=>{
        if(res){
          this.experiencias = res['elements'];
          console.log(this.experiencias)
        }
      }
    )
  }


  onSearch(){
    if(this.name.value===''){
      alert("Por favor introduce texto es la busqueda")
    }
    else{


console.log(this.name.value)
this.servicios.buscarExBySa(this.name.value).subscribe(
   (res)=>{
    if(res){
      this.experiencias = res['elements'];
      if(this.experiencias['length'] === 0) {
        alert("no hay resultados")
      }

    }


   }

 )
}
  }


  deleteMe(id) {
 this.servicios.eliminar(id).subscribe(
      (res)=>{
          this.listarTodo()
      }
    )
  }



}
