import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/myapp/");
  }

}
