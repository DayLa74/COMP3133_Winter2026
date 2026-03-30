import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroDetail } from '../hero-detail/hero-detail';
import { RemoveSpacesPipe } from '../remove-spaces-pipe';
import { InputFormat } from '../input-format';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeroDetail,
    RemoveSpacesPipe,
    InputFormat
  ],
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.css']
})
export class Heroes {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}