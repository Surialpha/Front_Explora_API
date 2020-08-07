import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfiguracionService } from './configuration.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Experiencias } from '../_models/experiencias';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {

  constructor( private http: HttpClient, private configuracion:ConfiguracionService,private formBuilder:FormBuilder) {   }

  experiencias:Experiencias;


  formularioExperiencias = this.formBuilder.group({
    titulo:["", [Validators.required,Validators.maxLength(20)]],
    descripcion:["", [Validators.required, Validators.maxLength(250)]],
    salaRef:["", [Validators.required, Validators.maxLength(20)]],
    imagen:[""],
    imagenRel:[""],
    _id:[""],
  });

  get titulo(){
    return this.formularioExperiencias.controls["titulo"];
  }
  get descripcion(){
    return this.formularioExperiencias.controls["descripcion"];
  }
  get salaRef(){
    return this.formularioExperiencias.controls["salaRef"];
  }
  get imagen(){
    return this.formularioExperiencias.controls["imagen"];
  }
  get imagenRel(){
    return this.formularioExperiencias.controls["imagenRel"];
  }


  listarTodo() {
    return this.http.get(this.configuracion.rootURL )
    }

  añadir(formData) {
    return this.http.post(this.configuracion.rootURL, formData);
    }

  eliminar(id) {
    return this.http.delete(this.configuracion.rootURL+'/'+id );
    }

  buscarExBySa(name) {
    return this.http.get(this.configuracion.rootURL+'/sala/'+name );
    }

  buscarBy(id) {
    return this.http.get<{}>(this.configuracion.rootURL+'/'+id,)
    }

  update(body,id) {
    return this.http.put(this.configuracion.rootURL+`/${id}`,body)
    }

}
