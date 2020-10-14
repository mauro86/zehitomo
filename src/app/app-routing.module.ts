import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouritesListsModule } from './favourites-lists/favourites-lists.module';
import { SearchImagesModule } from './search-images/search-images.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SearchImagesModule,
    FavouritesListsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
