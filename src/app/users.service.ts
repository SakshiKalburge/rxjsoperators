import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
BASE_URL : string = environment.JSON_PLACE_HOLDER;
USERS_URL : string = `${this.BASE_URL}/users`
  constructor(
    private _http : HttpClient
  ) { }

  fetchUsers():Observable<any>{
    return this._http.get(this.BASE_URL)
  }

  fetchuserBlogs(id : string): Observable<any>{
    let URL = `${this.BASE_URL}/${id}/posts`
    return this._http.get(URL)
  }
}
