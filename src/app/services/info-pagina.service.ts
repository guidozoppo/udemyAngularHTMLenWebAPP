import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) {
  
    //console.log("Servicio de infoPagina listo");
   
    //PARA LEER EL ARCHIVO JSON
    this.http.get('assets/data/data-pagina.json')
      .toPromise().then( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        
        console.log(resp);
        //console.log( resp['twitter'] );

      });

  }
}
