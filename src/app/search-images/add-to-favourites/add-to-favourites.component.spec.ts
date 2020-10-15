import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AddToFavouritesComponent } from './add-to-favourites.component';

describe('AddToFavouritesComponent', () => {
  let component: AddToFavouritesComponent;
  let fixture: ComponentFixture<AddToFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToFavouritesComponent ],
      imports: [MatSnackBarModule, MatDialogModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
