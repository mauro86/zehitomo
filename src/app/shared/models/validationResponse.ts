import { FavouriteList } from './favouriteList';

export interface ValidationResponse {
  result : boolean,
  message : string,
  list? : FavouriteList
}
