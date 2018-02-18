import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfomacionService {

  info:any = {};
  cargada:boolean = false;
  cargada_sobre_nosotros:boolean = false;
  equipo:any[] = [];

  constructor(private http:Http){
      this.cargar_info();
      this.cargar_sobre_nosotros();
  }


  public cargar_info() { 
      this.http.get("assets/data/info.paginas.json")
        .subscribe( data => {
          this.cargada = true;
          this.info=data.json();
        })

  }
  public cargar_sobre_nosotros(){
    this.http.get("https://paginaweb-374a0.firebaseio.com/equipo.json")
    .subscribe( data => {
     
      this.cargada_sobre_nosotros = true;
      this.equipo=data.json();
    })
  }

}
