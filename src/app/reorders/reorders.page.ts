import { Component, OnInit } from '@angular/core';
import {
  ItemReorderEventDetail,
  IonItem,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-reorders',
  templateUrl: './reorders.page.html',
  styleUrls: ['./reorders.page.scss'],
  standalone: false
})
export class ReordersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

}
