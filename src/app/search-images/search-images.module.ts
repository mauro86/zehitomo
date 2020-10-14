import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchImagesRoutingModule } from './search-images-routing.module';
import { SearchComponent } from './search/search.component';
import { MatInputModule } from '@angular/material/input';
import { ImageComponent } from './image/image.component';
import { AddToFavouritesComponent } from './add-to-favourites/add-to-favourites.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [SearchComponent, ImageComponent, AddToFavouritesComponent],
  imports: [
    CommonModule,
    MatInputModule,
    SearchImagesRoutingModule,
    MatDialogModule,
    MatRadioModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [SearchComponent, ImageComponent]
})
export class SearchImagesModule { }
