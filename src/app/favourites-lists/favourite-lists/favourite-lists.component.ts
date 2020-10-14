import { Component, OnInit } from '@angular/core';
import { FavouritesService } from 'src/app/shared/services/favourites.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favourite-lists',
  templateUrl: './favourite-lists.component.html',
  styleUrls: ['./favourite-lists.component.css']
})
export class FavouriteListsComponent implements OnInit {

  constructor(
    private favourites : FavouritesService,
    private _snackBar: MatSnackBar
  ) { }

  get listOfListItems() {
    return this.favourites.getListOfFavouriteLists();
  }

  updateListNameAndDescription(event : any, oldListName : string) {
    const newListName = event.name;
    const newListDescription = event.description;

    const updateResult = this.favourites.updateFavouriteList(newListName, newListDescription, oldListName);
    this.showNotification(updateResult.message, '');
  }

  showNotification(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  ngOnInit(): void {
  }

}
