import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchImagesRoutingModule } from './search-images/search-images-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), SearchImagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
