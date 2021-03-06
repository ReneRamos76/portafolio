import {RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core';



import { AboutComponent } from './componentes/about/about.component';
import { ItemComponent } from './componentes/item/item.component';
import { PortafolioHomeComponent} from './componentes/portafolio-home/portafolio-home.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';

const app_routes: Routes  = [
    { path: 'home', component: PortafolioHomeComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent,pathMatch: 'full' },
    { path: 'item/:id',component: ItemComponent , pathMatch: 'full'},
    { path: 'buscar/:termino', component: BuscarComponent , pathMatch: 'full'},
    { path: '**' , pathMatch: 'full' ,redirectTo:'home' }
];


export const APP_ROUTES = RouterModule.forRoot(app_routes, {useHash:true});