import { TestBed } from '@angular/core/testing';

import { FavouritesService } from './favourites.service';

describe('FavouritesService', () => {
  let service: FavouritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('given valid inputs, a new favourite list should be created.', () => {

    const name = 'Zehitomo';
    const description = "Zehitomo's favourite list";

    service.clearListOfFavouriteLists();
    const result = service.addFavouriteList(name, description);

    expect(result.result).toBeTrue();
  });

  it('given empty inputs, an attempt to create a new favourite list should fail.', () => {
    const name = '';
    const description = "";

    const result = service.addFavouriteList(name, description);

    expect(result.result).toBeFalse();
  });

  it('given a name of an already existing list, the attempt to create a new list with the same name should fail', () => {
    const name = 'Zehitomo';
    const description = 'Zehitomo';

    service.clearListOfFavouriteLists();
    service.addFavouriteList(name, description);
    const result = service.addFavouriteList(name, description);

    expect(result.result).toBeFalse();
  });


  it('given a new name and description, the attempt to updated an existing list should succeed', () => {
    const name = 'Zehitomo';
    const description = 'Zehitomo';

    const updatedName = 'New Zehitomo';
    const updatedDescription = 'New Zehitomo description';

    service.clearListOfFavouriteLists();
    service.addFavouriteList(name, description);
    const result = service.updateFavouriteList(updatedName, updatedDescription, name);

    expect(result.list.name).toEqual(updatedName);
    expect(result.list.description).toEqual(updatedDescription);
  });
});
