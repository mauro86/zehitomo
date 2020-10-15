import { Component } from '@angular/core';
import { FavouritesService } from 'src/app/shared/services/favourites.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favourite-lists',
  templateUrl: './favourite-lists.component.html',
  styleUrls: ['./favourite-lists.component.css']
})
export class FavouriteListsComponent {

  constructor(
    private favourites : FavouritesService,
    private snackBar: MatSnackBar
  ) { }

  get listOfListItems() {
    return this.favourites.getListOfFavouriteLists();
  }

  /**
   * Updates an existing favourite list with the provided new name and description.
   *
   * @param event : any
   * @param oldListName : string
   * @returns void
   */
  updateListNameAndDescription(event : any, oldListName : string) {
    const newListName = event.name;
    const newListDescription = event.description;

    const updateResult = this.favourites.updateFavouriteList(newListName, newListDescription, oldListName);
    this.showNotification(updateResult.message, '');
  }

  showNotification(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
