import { Injectable } from '@angular/core';
import Unsplash, { toJson } from "unsplash-js";
import { Image } from '../../shared/models/image';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchimagesService {

  constructor() { }

  async searchImages(searchQuery : string) : Promise<Image[]> {

    const unsplash = new Unsplash({
      accessKey: environment.unsplashAuthKey
    });

    const foundImages = await unsplash.search
      .photos(searchQuery)
      .then(toJson)
      .then(json => {
        return json.results;
      });

    return this.mapImages(foundImages);
  }

  mapImages(foundImages : any) {

    return foundImages.map(foundImage => {
      const image : Image = {
        id : foundImage.id,
        url : foundImage.urls.regular,
        downloadUrl : `https://unsplash.com/photos/${foundImage.id}/download?force=true`,
        uploaderProfile : foundImage.user.links.html,
        uploaderUsername : `@${foundImage.user.username}`
      }

      return image;
    });
  }
}
