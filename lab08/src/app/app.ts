import { Component } from '@angular/core';
import { Heroes } from './heroes/heroes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Heroes],
  template: '<app-heroes></app-heroes>'
})
export class App {}