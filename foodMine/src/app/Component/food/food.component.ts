import { Component } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { FoodService } from '../../Services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingModule } from '@khajegan/ng-starrating';
import { CommonModule } from '@angular/common';
import { TagsComponent } from '../tags/tags.component';
import { CartService } from '../../Services/cart/cart.service';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [RatingModule, CommonModule, TagsComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {
  food!: Food;
  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private router:Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this.food = foodService.getFoodById(params['id']);
      }
    });
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
