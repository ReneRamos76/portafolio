import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent {
        aux:undefined;
        producto:undefined;
  constructor(private route:ActivatedRoute,
              private _ps:ProductosService){
    route.params.subscribe( parametros =>{
         _ps.cargar_producto( parametros['id'] )
          .subscribe( res => {
              this.producto = res.json();
                this.aux = parametros['id'];
          })
    })
  
  
}
}
