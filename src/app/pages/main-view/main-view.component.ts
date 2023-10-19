import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.models';
import { Column } from 'src/app/models/column.models';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent {
  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      'Some random idea',
      'This is another random idea',
      'build an awesome application',
    ]),
    new Column('Reaserch', [
      'Search about custom pipes',
      'How to use Anular material',
      'build an awesome application',
    ]),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep',
    ]),
    new Column('done ', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog',
    ]),
  ]);
  constructor() {}
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  doneList: CdkDropList<string[]> = {} as CdkDropList<string[]>;
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
