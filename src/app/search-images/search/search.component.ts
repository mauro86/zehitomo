import { Component, OnInit, Optional } from '@angular/core';
import { Image } from '../../shared/models/image';
import { SearchimagesService } from '../services/searchimages.service';
import { MatDialog } from '@angular/material/dialog';
import { AddToFavouritesComponent } from '../add-to-favourites/add-to-favourites.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  images : Image[];
  searchMode : boolean = true;

  constructor(private searchService : SearchimagesService,  private dialog: MatDialog) {}

  /**
   * Given an array object, uses the searchService method `searchImages` to fetch an array of images
   * filtered by the inputted keyword.
   *
   * @param event
   * @returns Promise<void>
   */
  async searchImages(event : any) {
    this.images = await this.searchService.searchImages(event.target.value);
  }

  showAddToFavouritesPanel(image : Image) {

    const dialogRef = this.dialog.open(AddToFavouritesComponent, {
      width: '500px',
      data : {
        image : image
      }
    });
  }
}
