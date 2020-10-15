import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouriteListsComponent } from './favourite-lists/favourite-lists.component';

const routes: Routes = [{
  path : '',
  component : FavouriteListsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouritesListsRoutingModule { }
