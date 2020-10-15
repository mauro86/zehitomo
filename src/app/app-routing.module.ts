import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteNotFoundComponent } from './shared/components/route-not-found/route-not-found.component';

const routes: Routes = [
  {
    path : 'search',
    loadChildren: () => import('./search-images/search-images.module').then(m => m.SearchImagesModule)
  },
  {
    path : 'favourite-lists',
    loadChildren: () => import('./favourites-lists/favourites-lists.module').then(m => m.FavouritesListsModule)
  },
  {
    path : '',
    redirectTo : 'search',
    pathMatch : 'full'
  },
  {
    path : '**',
    component : RouteNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
