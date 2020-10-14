import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchImagesModule } from './search-images.module';
import { SearchComponent } from './search/search.component';

const routes: Routes = [{
  path : 'search',
  component : SearchComponent
},
{
  path : '',
  redirectTo : 'search',
  pathMatch : 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchImagesRoutingModule { }
