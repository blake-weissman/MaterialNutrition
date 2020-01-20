import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public movies = [
    'One',
    'Two',
    'Three',
    'Four',
  ];

  public drop(event: CdkDragDrop<string[]>) {
    // debugger;
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    this.movies = [...this.movies];
  }

}
