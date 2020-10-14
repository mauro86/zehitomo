import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from 'src/app/shared/models/image';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

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

  updateListDetails(name : string, description : string) {
    this.updateListNameAndDescription.next({name, description});
    this.editMode = false;
  }

  ngOnInit(): void {
  }

}
