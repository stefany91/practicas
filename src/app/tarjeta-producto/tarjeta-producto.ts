import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-producto',
  imports: [],
  templateUrl: './tarjeta-producto.html',
  styleUrl: './tarjeta-producto.css',
})
export class TarjetaProducto {
nombreProducto: string = 'Laptop Gamer';
  precio: number = 4599.90;
  stock: number = 12;

  imagenUrl: string = 'assets/imagen.jpeg';

  obtenerEstado(): string {
    return this.stock > 0
      ? 'Disponible'
      : 'Agotado';
  }

}
