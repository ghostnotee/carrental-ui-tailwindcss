import { Component, OnInit } from '@angular/core';
import { Colour } from 'src/app/models/colour';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.css'],
})
export class ColourComponent implements OnInit {
  dataLoaded = false;
  colours: Colour[] = [];
  currentColour: Colour | null;

  constructor(private colourService: ColourService) {}

  ngOnInit(): void {
    this.getColours();
  }

  getColours() {
    this.colourService.getColours().subscribe((response) => {
      this.colours = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentColour(colour: Colour) {
    this.currentColour = colour;
  }

  deleteCurrentColour() {
    this.currentColour = null;
  }

  getCurrentColourClass(colour: Colour) {
    if (this.currentColour == colour) {
      return 't-dimension bg-gradient-to-r from-teal-100 via-teal-50 to-white';
    } else {
      return 't-dimension';
    }
  }

  getAllColoursClass() {
    if (!this.currentColour) {
      return 't-dimension bg-gradient-to-r from-teal-100 via-teal-50 to-white';
    } else {
      return 't-dimension';
    }
  }
}
