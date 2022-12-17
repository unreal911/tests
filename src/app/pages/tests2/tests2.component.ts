import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-tests2',
  templateUrl: './tests2.component.html',
  styleUrls: ['./tests2.component.css']
})
export class Tests2Component implements OnInit {
  files: any
  @ViewChild('fileInput') fileInput: any;
  constructor(private productoService: ServicesService) { }
  ngOnInit(): void {
    this.productoService.mostrarProducto().subscribe(
      (resp: any) => {
        console.log(resp)
        let imgarray = resp.producto.img
        console.log(imgarray)
        for (let i = 0; i < imgarray.length; i++) {
          const element = {
            id: imgarray[i].id,
            url: imgarray[i].url
          }
          this.timePeriods.push(element)
        }
      },
      (err) => {
        console.log(err)
      }
    )
  }
  timePeriods: any[] = [
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }
  subir(event: any) {
    // let arrayTemp: any[] = []
    this.files = event.target.files;
    for (const key in this.files) {
      const element = this.files[key];
      // Creamos un objeto Blob a partir del archivo seleccionado
      const blob = new Blob([element], { type: element.type });
      const reader = new FileReader();
      // Leemos el contenido del Blob y obtenemos una URL codificada en base64
      reader.onload = (resp) => {
        let ls = resp.target?.result
        if (!ls?.toString().includes('data:application/octet-stream')) {
          this.timePeriods.push(
            {
              file: element,
              url: ls
            })
        }
      };
      reader.readAsDataURL(blob);
    }

  }
  borrar(i: number) {
    if (this.timePeriods[i].id) {
      console.log('este es el id')
    }
    else {
      let nuevoarray = this.timePeriods.splice(i, 1)
      console.log(nuevoarray)
      // Verifica que la variable fileInput esté inicializada y asignada a una referencia al elemento <input type="file">
      if (this.fileInput && this.fileInput.nativeElement) {
        // Resetea el elemento <input type="file">
        this.fileInput.nativeElement.value = '';
      }
      console.log('IMG TEMP BLOB')
    }

  }
}
