import { Component } from '@angular/core';
import {  ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio-home',
  templateUrl: './portafolio-home.component.html'
})
export class PortafolioHomeComponent  {

  constructor (public _ps:ProductosService){

  }

}
