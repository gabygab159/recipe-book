import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Good recipe',
      'very delicious',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fworld.openfoodfacts.org%2Fproduct%2F0031000809478%2Fmega-bowls-nashville-hot-chicken-recipe&psig=AOvVaw1hAjg-aGm5D5C0Igt_qbLW&ust=1651800141042000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNCP66qZx_cCFQAAAAAdAAAAABAD'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
