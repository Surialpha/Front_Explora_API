import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from 'src/app/_services/experiencias.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {


  experiencias:Object=null;
  experiencia=null;
  name = new FormControl('')
  titulo = new FormControl('')
  descripcion = new FormControl('')
  salaRef = new FormControl('')
  imagen = new FormControl('')

  constructor(public servicios:ExperienciasService,public router:Router) { }

  ngOnInit(): void {
    this.listarTodo();
    console.log(this.experiencias)
  }


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

  buscarBy(){
    if(this.name.value===''){
      alert("Debes seleccionar una experiencia para buscar y continuar")
    }
    else{
      this.servicios.buscarBy(this.name.value).subscribe(
        (res)=>{
          if(res){
            this.experiencia = res['elements'];
            console.log(this.experiencia[0])
            this.servicios.formularioExperiencias.setValue({
              titulo: this.experiencia[0].titulo,
               descripcion: this.experiencia[0].descripcion,
               salaRef:this.experiencia[0].salaRef,
               imagen:this.experiencia[0].imagen,
               imagenRel:this.experiencia[0].imagenRel,
               _id:this.experiencia[0]._id
              });

          }

        }
      )

    }

  }

  onSubmit(){
    const Experiencia = this.servicios.formularioExperiencias.value
    let ExperienciaUpdate = `[
      {"propName":"_id","value":"${Experiencia._id}"},
      {"propName":"titulo","value":"${Experiencia.titulo}"},
      {"propName":"descripcion","value":"${Experiencia.descripcion}"},
      {"propName":"salaRef","value":"${Experiencia.salaRef}"}
  ]`

    const newExp = JSON.parse(ExperienciaUpdate)
    this.servicios.update(newExp,Experiencia._id).subscribe((res)=>{
      if(res){
        console.log(res)
        alert("Experiencia modificada")
        location.reload()

      }
    })
  }


}
