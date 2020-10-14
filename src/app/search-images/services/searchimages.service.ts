import { Injectable, Input } from '@angular/core';
import { of } from 'rxjs';
import Unsplash, { toJson } from "unsplash-js";
import { Image } from '../../shared/models/image';

@Injectable({
  providedIn: 'root'
})
export class SearchimagesService {

  private readonly UNSPLASH = new Unsplash({
    accessKey: "tjWbnYAHcn-IhzbHFbIlvt_iy6m8apfZ1Kr1_lbx_gY",
  });

  constructor() { }

  async searchImages(searchQuery : string) : Promise<Image[]> {

    const foundImages = await this.UNSPLASH.search
        .photos(searchQuery)
        .then(toJson)
        .then((json) => {
              return (json.results);
          });

    return this.mapImages(foundImages);
  }

  mapImages(foundImages) {

    return foundImages.map(foundImage => {
      const image : Image = {
        id : foundImage.id,
        url : foundImage.urls.full,
        downloadUrl : `https://unsplash.com/photos/${foundImage.id}/download?force=true`,
        uploaderProfile : foundImage.user.links.html
      }

      return image;
    });
  }
}
