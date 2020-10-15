import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from 'src/app/shared/models/image';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input()
  name : string;
  @Input()
  description : string;
  @Input()
  images : Array<Image>;

  @Output()
  updateListNameAndDescription = new EventEmitter<{
                                              name : string,
                                              description : string
                                            }>();

  editMode : boolean = false;

  constructor() { }

  /**
   * Emits an updateListNameAndDescription event
   *
   * @param name : string
   * @param description : string
   * @returns void
   */
  updateListDetails(name : string, description : string) {
    this.updateListNameAndDescription.emit({name, description});
    this.editMode = false;
  }
}
