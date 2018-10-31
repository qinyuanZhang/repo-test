import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit} from '@angular/core';

import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {log} from 'util';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  heroes = HEROES;
  selectedHero: Hero;
  name: string;

  constructor() { }

  ngOnInit() {
    console.log(this.heroes);
  }

  ngOnChanges() {
    console.log(this.heroes);
  }

  ngDoCheck() {
    console.log('ngDoCheck', this.selectedHero);
    if (this.name) {
      console.log(this.name);
    }
  }

  ngAfterContentInit() {
    console.log(this.heroes);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked', this.selectedHero);
  }

  ngAfterViewInit() {
    console.log(this.heroes);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked', this.selectedHero);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.name = hero.name;
  }
}
