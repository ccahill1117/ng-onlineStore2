import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarsRoverApiPhotosService } from '../mars-rover-api-photos.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css'],
  providers: [ MarsRoverApiPhotosService ]
})

export class RoverFormComponent {
  photos: any[]=null;
  noPhotos: boolean=false;


  constructor(private marsRoverPhotosService: MarsRoverApiPhotosService) { }

  getRoverImages(date: string, camera: string) {
    this.photos=null;
    this.marsRoverPhotosService.getByDateAndCamera(date, camera).subscribe(response => {
      if(response.json().photos.length > 0) {
        this.photos = response.json();
      }
    });
  }

  ngOnInit() { }

}
