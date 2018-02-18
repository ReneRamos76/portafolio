import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { promise } from 'protractor';
import { resolve } from 'path';
@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_filtrado:any[]=[];
  cargando:boolean = false;

  constructor(private http:Http) { 
      this.cargar_productos();
  }

  public buscar_producto(termino:string) {

      if (this.productos.length === 0) {
        this.cargar_productos().then(()=>{
          //termino la carga
            this.filtrar_producto(termino);
        });
      }else{
        this.filtrar_producto(termino);
      }
  } 

  private filtrar_producto(termino:string){
    this.productos_filtrado = [];
    termino = termino.toLowerCase();
    this.productos.forEach(prod => {
      if (prod.categoria.indexOf(termino) >=0 || prod.titulo.toLowerCase().indexOf(termino) >=0 ) {
        this.productos_filtrado.push(prod);
      }
    });
  }

  public cargar_producto(cod:string){
    return this.http.get(`https://paginaweb-374a0.firebaseio.com/productos/${ cod }.json `);
  }

  public cargar_productos(){
    this.cargando = false;
      let promesa = new Promise( ( resolve , reject  )=>{
          this.http.get("https://paginaweb-374a0.firebaseio.com/productos_idx.json")
        .subscribe(res => {
            this.cargando = true;
            this.productos = res.json();
            resolve();
        });


      } );

      return promesa;  
  }
}
