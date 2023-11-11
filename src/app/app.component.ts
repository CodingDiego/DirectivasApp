import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Registro de usuarios';
  mensaje = ""
  registrado = false;
  nombre:string = "";
  apellido:string = "";

  entradas: object[];

  constructor(){
    this.entradas = [
      {titulo:"Python cada dia mas inutil"},
      {titulo:"C++ cada dia mas usado por los indios"},
      {titulo:"JavaScript cada dia mas vanilla"},
      {titulo:"Java cada dia consumiendo mas RAM"},
      {titulo:"El gobierno de Massa cada dia mas nefasto"},
      {titulo:"Los peronistas cada dia mas mogolicos"},
      {titulo:"Viva la Libertad carajo"},
    ]
    
  }

  registrarUsuario(){

    this.registrado = true;
    this.mensaje = `${this.nombre} ${this.apellido} ha sido registrado con exito`;
  }

}
