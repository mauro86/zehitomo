import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';



@NgModule({
  declarations: [
    ImageComponent,
    RouteNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageComponent,
    RouteNotFoundComponent
  ]
})
export class SharedModule { }
