import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  /* Javascript orientada a objetos .ts => typescript*/
  mensaje: string = '¡Esto es un ejemplo de interpolación en Angular!';
  nombre = 'Alonso'
  edad = 20
  correo = 'alonso13@gmail.com'
}
