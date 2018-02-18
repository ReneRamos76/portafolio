import { Component } from '@angular/core';
import { InfomacionService } from './services/infomacion.service'
import { ProductosService } from './services/productos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (public _is : InfomacionService, public _ip:ProductosService){

    
  }
}
