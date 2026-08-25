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
  stock: number = 20;

  imagenUrl: string = 'assets/imagen2.jpeg';

  get sinStock(): boolean {
    return this.stock <= 0;
  }

  obtenerEstado(): string {
    return this.sinStock ? 'Agotado' : 'Disponible';
  }

  comprarProducto() {
    if (this.stock > 0) {
      this.stock--; 
    }
  }

}
