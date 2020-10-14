import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FavouriteList } from '../models/favouriteList';
import { FavouritesService } from '../services/favourites.service';

@Component({
  selector: 'app-add-to-favourites',
  templateUrl: './add-to-favourites.component.html',
  styleUrls: ['./add-to-favourites.component.css']
})
export class AddToFavouritesComponent implements OnInit {

  listOfFavouriteLists : Array<FavouriteList>;
  selectedFavouriteList : string;

  constructor(private favourites : FavouritesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddToFavouritesComponent>,
    private _snackBar: MatSnackBar
    ) {}

  addNewFavouriteList(event : any) {
    event.preventDefault();

    const addFavouriteListResult = this.favourites.addFavouriteList(event.target[0].value, event.target[1].value);
    this.showNotification(addFavouriteListResult.message, '');
  }

  setSelectedFavouriteList(event) {
    this.selectedFavouriteList = event.value;
  }

  addImageToFavouriteList(event) {
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
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.listOfFavouriteLists = this.favourites.getListOfFavouriteLists();
  }

}
