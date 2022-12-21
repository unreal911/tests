import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {

  }
  mostrarProducto() {
    return this.http.get('http://localhost:3000/api/producto/id/639a6281cceeb612f6ba770b')
  }
  eliminarImagen(img: string) {
    return this.http.delete('http://localhost:3000/api/uploads/639a6281cceeb612f6ba770b', {
      body: {
        img: img
      }
    })
  }
  cambiarPosicion(after: number, before: number) {
    return this.http.put('http://localhost:3000/api/uploads/639a6281cceeb612f6ba770b',
      {
        after: after,
        before: before
      }
    )
  }
}
