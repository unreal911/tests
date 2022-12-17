import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tests1',
  templateUrl: './tests1.component.html',
  styleUrls: ['./tests1.component.css']
})
export class Tests1Component implements OnInit {
  constructor() { }
  items = ['item1', 'item2', 'item3', 'item4']
  file: any;
  imagenesprew: any[] = []
  archivosPorSubir = [
    {}
  ]
  ngOnInit(): void {
  }
  @ViewChild('fileInput') fileInput: any;
  ngAfterViewInit() {
    // Asigna la referencia al elemento a la variable fileInput
    this.fileInput = this.fileInput;
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log('index anterior', event.previousIndex)
    console.log('index nuevo', event.currentIndex)
  }
  probando(i: number) {
    let nuevoarray = this.imagenesprew.splice(i, 1)
    console.log(nuevoarray)
    // Verifica que la variable fileInput esté inicializada y asignada a una referencia al elemento <input type="file">
    if (this.fileInput && this.fileInput.nativeElement) {
      // Resetea el elemento <input type="file">
      this.fileInput.nativeElement.value = '';
    }
  }
  subir(event: any) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      //this.imageUrl = reader.result;
      this.imagenesprew.push(reader.result)
    };
  }
}
