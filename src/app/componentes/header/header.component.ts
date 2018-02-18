import { Component } from '@angular/core';
import { InfomacionService } from '../../services/infomacion.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor (public _is:InfomacionService,
                  public _router:Router){}

     buscar_producto( termino:string ){
        this._router.navigate(['buscar',termino]);
    }
}
