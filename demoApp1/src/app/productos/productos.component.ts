import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() datos: any;
  @Output() productoSeleccionado = new EventEmitter<any>();
  @Output() productoEliminado = new EventEmitter<number>();

  seleccionarParaEdicion(producto: any) {
    this.productoSeleccionado.emit(producto);
  }

  eliminarProducto(codigo: number) {
    this.productoEliminado.emit(codigo);
  }
  constructor() {}
  ngOnInit() {
      
  }
}
