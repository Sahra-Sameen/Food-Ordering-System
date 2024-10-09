import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return [
      {
        id:1,
        name: "Burger",
        price: 95,
        favorite: false,
        stars: 3,
        imageUrl: '/assets/images/food-1.jpg',
        origins: ['India', 'USA'],
        cookTime: '20-30',
        tags: ['Fast food', 'Mexican']
      },
      {
        id:2,
        name: "Noodles",
        price: 150,
        favorite: true,
        stars: 5,
        imageUrl: '/assets/images/food-2.jpg',
        origins: ['India', 'USA'],
        cookTime: '20-30',
        tags: ['Fast food', 'Mexican']
      },
      {
        id:3,
        name: "Maccaroni",
        price: 450,
        favorite: true,
        stars: 2,
        imageUrl: '/assets/images/food-3.jpg',
        origins: ['India', 'USA'],
        cookTime: '20-30',
        tags: ['Fast food', 'Mexican']
      },
      {
        id:4,
        name: "Pizza",
        price: 950,
        favorite: false,
        stars: 4,
        imageUrl: '/assets/images/food-4.jpg',
        origins: ['India', 'USA'],
        cookTime: '20-30',
        tags: ['Fast food', 'Mexican']
      },
      {
        id:5,
        name: "Sea Food Noodles",
        price: 750,
        favorite: false,
        stars: 2,
        imageUrl: '/assets/images/food-5.jpg',
        origins: ['India', 'USA'],
        cookTime: '20-30',
        tags: ['Fast food', 'Mexican']
      },
      {
        id:6,
        name: "Vegetable Rice",
        price: 950,
        favorite: true,
        stars: 5,
        imageUrl: '/assets/images/food-6.jpg',
        origins: ['India', 'USA'],
        cookTime: '20-30',
        tags: ['Fast food', 'Mexican']
      },
      {
        id:7,
        name: "Soup",
        price: 1050,
        favorite: false,
        stars: 5,
        imageUrl: '/assets/images/food-7.jpg',
        origins: ['India', 'USA'],
        cookTime: '20-30',
        tags: ['Fast food', 'Mexican']
      },
      {
        id:8,
        name: "Salad",
        price: 950,
        favorite: true,
        stars: 3,
        imageUrl: '/assets/images/food-8.jpg',
        origins: ['India', 'USA'],
        cookTime: '20-30',
        tags: ['Fast food', 'Mexican']
      },
      {
        id:9,
        name: "Fish Fry",
        price: 950,
        favorite: true,
        stars: 3,
        imageUrl: '/assets/images/food-9.jpeg',
        origins: ['India', 'USA'],
        cookTime: '20-30',
        tags: ['Fast food', 'Mexican']
      },
      {
        id:10,
        name: "Chicken Fry",
        price: 250,
        favorite: false,
        stars: 1,
        imageUrl: '/assets/images/food-10.jpeg',
        origins: ['India', 'USA'],
        cookTime: '20-30',
        tags: ['Fast food', 'Mexican']
      }
    ];
  }
}
