import { Component, OnInit } from '@angular/core';
import {importType} from '@angular/compiler/src/output/output_ast';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {id: 1, name: 'winStrom'};
  heroes = HEROES;
  SelectHero: Hero;

  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.SelectHero = hero;
  }

}


