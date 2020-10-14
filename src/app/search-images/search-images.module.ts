import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchImagesRoutingModule } from './search-images-routing.module';
import { SearchComponent } from './search/search.component';
import { MatInputModule } from '@angular/material/input';
import { AddToFavouritesComponent } from './add-to-favourites/add-to-favourites.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SearchComponent, AddToFavouritesComponent],
  imports: [
    CommonModule,
    MatInputModule,
    SearchImagesRoutingModule,
    MatRadioModule,
    MatButtonModule,
    RouterModule,
    SharedModule
  ],
  exports: [SearchComponent]
})
export class SearchImagesModule { }
