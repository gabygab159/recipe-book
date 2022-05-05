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
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fmmm-yoso%2F45800475025&psig=AOvVaw2HaWqo-uhjspck_6uYLfo5&ust=1651799347496000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCy2aKWx_cCFQAAAAAdAAAAABAD'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
