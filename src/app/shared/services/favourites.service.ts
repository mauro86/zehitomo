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

  /**
   * Initialises the listOfFavouriteLists attribute with the value retrieved from the
   * local storage.
   *
   * @returns void
   */
  initListOfFavouriteLists() {
    this.listOfFavouriteLists = JSON.parse(localStorage.getItem('listOfFavouriteLists'));

    if (this.listOfFavouriteLists == null) {
      this.listOfFavouriteLists = [];
    }
  }

  /**
   * Given a name and a description, it validates them and, if successful,
   * stores a new FavouriteList in the local storage.
   *
   * @param name : string
   * @param description : string
   * @returns ValidationResponse
   */
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

  /**
   * Given the old list name, a new name, a new description, finds the existing list by old name,
   * and updates the list with its new name and description, given successful validation of those
   * fields.
   *
   * @param newListName : string
   * @param newListDescription : string
   * @param oldListName : string
   * @returns ValidationResponseS
   */
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

  /**
   * Given a list name and an image, adds the image to the corresponding list,
   * given that the list exists in memory.
   *
   * @param listName : string
   * @param image : string
   * @returns boolean
   */
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
