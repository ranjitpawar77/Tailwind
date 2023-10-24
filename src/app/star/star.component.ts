import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { StarRatingConfigService } from 'angular-star-rating';



@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  selectedRating: number = 0;

  rate(rating: number) {
    this.selectedRating = rating;
  }
  addValue(){
  }  

}
