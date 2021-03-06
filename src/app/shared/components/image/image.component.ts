import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  @Input() image : Image;
  @Input() searchMode : boolean;
  @Output() showAddToFavourites = new EventEmitter<Image>();

  constructor() { }

  showFavouritesPanel() {
    this.showAddToFavourites.emit(this.image);
  }
}
