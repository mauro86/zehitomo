import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouritesListsRoutingModule } from './favourites-lists-routing.module';
import { FavouriteListsComponent } from './favourite-lists/favourite-lists.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FavouriteListsComponent, ListItemComponent],
  imports: [
    CommonModule,
    FavouritesListsRoutingModule,
    SharedModule,
    MatButtonModule,
    RouterModule
  ]
})
export class FavouritesListsModule { }
