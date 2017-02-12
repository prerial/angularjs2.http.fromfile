import { Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  templateUrl: '../html/app.component.html',
  styleUrls: [ '../css/app.component.css' ]
})

export class AppComponent {
  title = 'Mikhail';
  heroes: Hero[];
  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      // the first argument is a function which runs on success
      data => { this.heroes = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading heroes')
    );
  }
}
