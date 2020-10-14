import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FavouriteList } from '../models/favouriteList';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private listOfFavouriteLists : Array<FavouriteList>;

  constructor() {
    this.initListOfFavouriteLists();
  }

  initListOfFavouriteLists() {
    this.listOfFavouriteLists = JSON.parse(localStorage.getItem('listOfFavouriteLists'));

    if (this.listOfFavouriteLists == null) {
      this.listOfFavouriteLists = [];
    }
  }

  addFavouriteList(name : string, description : string) {

    const validationResult = this.validateForm(name, description);

    if (validationResult.result) {

      const newList : FavouriteList = {
        name : name,
        description : description,
        images : []
      };

      this.listOfFavouriteLists.push(newList);
      this.storeListOfFavouriteLists();
    }

    return validationResult;
  }

  storeListOfFavouriteLists() {
    localStorage.setItem('listOfFavouriteLists', JSON.stringify(this.listOfFavouriteLists));
  }

  getListOfFavouriteLists() {
    return this.listOfFavouriteLists;
  }

  validateForm(name : string, description : string) {

    if (!name || !description) {
      return {
        result : false,
        message : 'Name and Description are required'
      };
    }

    for (let list of this.listOfFavouriteLists) {
      if (list.name == name) {
        return {
          result : false,
          message : `List ${name} already exists. Please choose a different name`
        };
      }
    }

    return {
      result : true,
      message : `List ${name} has been added successfully`
    };
  }

  addImageToFavouriteList(listName : string, image : Image) {
    for (let list of this.listOfFavouriteLists) {
      if (list.name == listName) {

        for (let listImage of list.images) {
          if (listImage.id == image.id) {
            return false;
          }
        }

        list.images.push(image);
        this.storeListOfFavouriteLists();

        return true;
      }
    }

  }
}


