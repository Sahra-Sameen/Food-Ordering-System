import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { FoodComponent } from './Component/food/food.component';
import { CartPageComponent } from './Component/cart-page/cart-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search/:searchTerm', component:HomeComponent},
    {path: 'tag/:tag', component:HomeComponent},
    {path: 'food/:id', component:FoodComponent},
    {path: 'cart-page', component:CartPageComponent}
];