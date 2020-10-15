import { Injectable } from '@angular/core';
import { FavouriteList } from '../../shared/models/favouriteList';
import { Image } from '../../shared/models/image';
import { ValidationResponse } from '../models/validationResponse';

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

  addFavouriteList(name : string, description : string) : ValidationResponse {

    const validationResult = this.validateAddListForm(name, description);

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

  updateFavouriteList(newListName : string, newListDescription : string, oldListName : string) : ValidationResponse {

    const validationResult = this.validateUpdateListForm(newListName, newListDescription, oldListName);

    if (validationResult.result) {

      for (let list of this.listOfFavouriteLists) {

        if (list.name == oldListName) {
          list.name = newListName;
          list.description = newListDescription;
          validationResult.list = list;
        }
      }

      try {
        this.storeListOfFavouriteLists();
      } catch(error) {

        return {
          result : false,
          message : 'Something went wrong. Please check there is enough space in memory.'
        }
      }
    }

    return validationResult;

  }

  storeListOfFavouriteLists() {
    localStorage.setItem('listOfFavouriteLists', JSON.stringify(this.listOfFavouriteLists));
  }

  clearListOfFavouriteLists() {
    localStorage.removeItem('listOfFavouriteLists');
  }

  getListOfFavouriteLists() {
    return this.listOfFavouriteLists;
  }

  validateAddListForm(name : string, description : string) : ValidationResponse {

    let result = {
      result : false,
      message : '',
      list : null
    }

    if (!name || !description) {

      result.result = false;
      result.message = 'Name and Description are required';

      return result;
    }

    for (let list of this.listOfFavouriteLists) {

      if (list.name == name) {

        result.result = false;
        result.message = `List ${name} already exists. Please choose a different name`;

        return result;
      }
    }

    result.result = true,
    result.message = `List ${name} has been added successfully`

    return result;
  }

  validateUpdateListForm(name : string, description : string, oldName : string) : ValidationResponse {

    let result = {
      result : false,
      message : '',
      list : null
    }

    if (!name || !description) {

      result.result = false;
      result.message = 'Name and Description are required';

      return result;
    }

    for (let list of this.listOfFavouriteLists) {

      if (list.name == name && name != oldName) {

        result.result = false;
        result.message = `List ${name} already exists. Please choose a different name`;

        return result;
      }
    }

    result.result = true;
    result.message = `List ${name} has been updated successfully`;

    return result;
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
