import { Component } from '@angular/core';
import { InfomacionService } from '../../services/infomacion.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor (public _is:InfomacionService){}
}
