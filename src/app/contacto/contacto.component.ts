import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})


export class ContactoComponent {
  comentario: string = '';

  enviarComentario() {
    console.log("Comentario enviado:", this.comentario);
    // Aquí puedes agregar la lógica para enviar el comentario a tu correo
  }
}

