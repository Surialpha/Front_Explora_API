import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfiguracionService } from "./_services/configuration.service";
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



import { AppComponent } from './app.component';
import { ListarComponent } from './components/listar/listar.component';
import {AñadirComponent} from './components/añadir/añadir.component';
import { EditarComponent } from './components/editar/editar.component'

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AñadirComponent,
    EditarComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    appRoutingModule
  ],
  providers: [ConfiguracionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
