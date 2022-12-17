import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {

  }
  mostrarProducto(){
    return this.http.get('http://localhost:3000/api/producto/id/639a6281cceeb612f6ba770b')
  }
  mostrarImagenes() {
  }
}
