import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FavouriteList } from '../../shared/models/favouriteList';
import { FavouritesService } from '../../shared/services/favourites.service';

@Component({
  selector: 'app-add-to-favourites',
  templateUrl: './add-to-favourites.component.html',
  styleUrls: ['./add-to-favourites.component.css']
})
export class AddToFavouritesComponent implements OnInit {

  listOfFavouriteLists : Array<FavouriteList>;
  selectedFavouriteList : string;

  constructor(
    private favourites : FavouritesService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    @Optional() public dialogRef: MatDialogRef<AddToFavouritesComponent>,
    private _snackBar: MatSnackBar
  ) {}

  /**
   * Given an event object containing the values of the submitted list form (name, description),
   * validates and stores a new favourite list utilising the favourites service method `addFavouriteList`.
   *
   * @param event : any
   * @return void
   */
  addNewFavouriteList(event : any) {
    event.preventDefault();

    const addFavouriteListResult = this.favourites.addFavouriteList(event.target[0].value, event.target[1].value);
    this.showNotification(addFavouriteListResult.message, '');
  }

  setSelectedFavouriteList(event) {
    this.selectedFavouriteList = event.value;
  }

  /**
   * Triggered on clicking `Add to Favourites` button, this method stores the selected image object within
   * the selected favourite list.
   *
   * @param event : any
   * @return void
   */
  addImageToFavouriteList(event : any) {
    const addImageResult = this.favourites.addImageToFavouriteList(this.selectedFavouriteList, this.data.image);
    let notificationText = '';

    if (addImageResult) {
      notificationText = `The selected image has been added to the list ${this.selectedFavouriteList}`;

    } else {
      notificationText = `The selected image is already present in the list ${this.selectedFavouriteList}`;
    }

    this.showNotification(notificationText, '');
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  showNotification(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  ngOnInit(): void {
    this.listOfFavouriteLists = this.favourites.getListOfFavouriteLists();
  }

}
