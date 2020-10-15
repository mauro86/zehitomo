import { TestBed } from '@angular/core/testing';
import { doesNotReject } from 'assert';

import { SearchimagesService } from './searchimages.service';

describe('SearchimagesService', () => {
  let service: SearchimagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchimagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('given a valid query, should return an array of images', (done) => {
    const query = 'apple';
    const result = service.searchImages(query).then(result => {
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
      done();
    });
  });

  it('given an empty query, should return an empty array', (done) => {
    const query = '';
    const result = service.searchImages(query).then(result => {
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toEqual(0);
      done();
    });
  });

  it('given an array of image objects returned from Unsplash, should return a mapped array of image models', () => {
    const unsplashedImages = [{
      alt_description: "white Corsair international passenger plane",
      blur_hash: "LGL}EM9GRPa{%h%Nt6jY~q%LWVt8",
      categories: [],
      color: "#212737",
      created_at: "2019-06-24T00:40:58-04:00",
      current_user_collections: [],
      description: "A330 Corsair Taking off",
      height: 3162,
      id: "LQ3hC5FO2PY",
      liked_by_user: false,
      likes: 6,
      promoted_at: null,
      sponsorship: null,
      tags: [],
      updated_at: "2020-09-24T18:09:57-04:00",
      urls: {
        raw: "https://images.unsplash.com/photo-1561351119-6726b…9c3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3NDA0M30",
        full: "https://images.unsplash.com/photo-1561351119-6726b…crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE3NDA0M30",
        regular: "https://images.unsplash.com/photo-1561351119-6726b…ysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3NDA0M30",
        small: "https://images.unsplash.com/photo-1561351119-6726b…nysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE3NDA0M30",
        thumb: "https://images.unsplash.com/photo-1561351119-6726b…nysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3NDA0M30"
      },
      user: {
        id: "IvLxThq4k8A",
        updated_at: "2020-10-13T09:17:26-04:00",
        username: "pixtolero2",
        name: "Daniel Eledut",
        first_name: "Daniel",
        links: {
          self: "https://api.unsplash.com/photos/LQ3hC5FO2PY",
          html: "https://unsplash.com/photos/LQ3hC5FO2PY",
          download: "https://unsplash.com/photos/LQ3hC5FO2PY/download",
          download_location: "https://api.unsplash.com/photos/LQ3hC5FO2PY/download"
        }
      },
      width: 4748
    }];

    const result = service.mapImages(unsplashedImages);
    expect(result[0].hasOwnProperty('id')).toBeTrue();
    expect(result[0].hasOwnProperty('url')).toBeTrue();
    expect(result[0].hasOwnProperty('downloadUrl')).toBeTrue();
    expect(result[0].hasOwnProperty('uploaderProfile')).toBeTrue();
    expect(result[0].hasOwnProperty('uploaderUsername')).toBeTrue();
  });

});
