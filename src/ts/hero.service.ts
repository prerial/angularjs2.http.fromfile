/**
 * Created by Mikhail on 2/12/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HeroService {

  private heroesUrl = '/data/heroes.json';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(){
    return this.http.get(this.heroesUrl).map((res:Response) => res.json());
  }

}
