import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaProducto } from './tarjeta-producto/tarjeta-producto';

@Component({
  selector: 'app-root',
  imports: [TarjetaProducto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica4');
}
