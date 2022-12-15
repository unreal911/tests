import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items = ['item1', 'item2', 'item3', 'item4']
  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log('index anterior',event.previousIndex)
    console.log('index nuevo',event.currentIndex)
  }
  probando(){
    console.log('Hola')
  }

}




