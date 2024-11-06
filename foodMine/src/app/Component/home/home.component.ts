import { Component } from '@angular/core';
import { FoodService } from '../../Services/food/food.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Food } from '../../shared/models/Food';
import { RatingModule } from '@khajegan/ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RatingModule,SearchComponent, TagsComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private foodService: FoodService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      } else if (params['tag']) {
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
  
}
