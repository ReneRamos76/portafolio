import { Component} from '@angular/core';
import { InfomacionService } from '../../services/infomacion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent  {

  constructor(public _is:InfomacionService) { }


}
