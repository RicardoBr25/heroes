import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HereoModel } from '../models/heroe.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://login-app-8a910-default-rtdb.firebaseio.com';

  constructor( private http: HttpClient ) { }

  crearHeroe ( heroe: HereoModel){

    return this.http.post(`${ this.url }/heroes.json`, heroe)
    .pipe(
      map((resp:any) => {
        heroe.id= resp.name;
        return heroe;
      })
    );
  }


}
