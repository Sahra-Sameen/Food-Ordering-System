import { Component } from '@angular/core';
import { FoodService } from '../../Services/food/food.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Food } from '../../shared/models/Food';
import { RatingModule } from '@khajegan/ng-starrating';
 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RatingModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

}
