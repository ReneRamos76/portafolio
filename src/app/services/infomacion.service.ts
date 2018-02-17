import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfomacionService {

  info:any = {};
  cargada:boolean = false;

  constructor(private http:Http) { 
      this.http.get("assets/data/info.paginas.json")
        .subscribe( data => {
          console.log(data.json());
          this.cargada = true;
          this.info=data.json();
        })

  }

}
