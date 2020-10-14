import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/models/image';
import { SearchimagesService } from '../services/searchimages.service';
import { MatDialog } from '@angular/material/dialog';
import { AddToFavouritesComponent } from '../add-to-favourites/add-to-favourites.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  images : Image[];

  constructor(private searchService : SearchimagesService, private dialog: MatDialog) {}

  async searchImages(event : any) {
    this.images = await this.searchService.searchImages(event.target.value);
  }

  showAddToFavouritesPanel(image : Image) {
    const dialogRef = this.dialog.open(AddToFavouritesComponent, {
      width: '50%',
      data : {
        image : image
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit(): void {
  }

}
