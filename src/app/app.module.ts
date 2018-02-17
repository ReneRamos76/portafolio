import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';

//rutas
import {APP_ROUTES} from './app.routes';


//services
import { InfomacionService } from './services/infomacion.service'



import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortafolioHomeComponent } from './componentes/portafolio-home/portafolio-home.component';
import { AboutComponent } from './componentes/about/about.component';
import { ItemComponent } from './componentes/item/item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioHomeComponent,
    AboutComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpModule
    
  ],
  providers: [
    InfomacionService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
