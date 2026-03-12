import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private readonly BASE_URL : string = environment.PRODUCT_URL
private readonly SEARCH_URL : string = `${this.BASE_URL}/search`
  constructor(
    private  _http : HttpClient
  ) { }

  fetchsearchproducts(query : string):Observable<any>{
    let params = new HttpParams().set('q', query)
    return this._http.get(this.BASE_URL,{params})
  }
}
