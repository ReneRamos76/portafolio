import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = false;

  constructor(private http:Http) { 
      this.cargar_productos();
  }

  public cargar_productos(){
    this.cargando = false;
    if (this.productos.length === 0) {
      this.http.get("https://paginaweb-374a0.firebaseio.com/productos_idx.json")
        .subscribe(res => {
            console.log(res.json());
            this.cargando = true;
        })
    }


  }

}