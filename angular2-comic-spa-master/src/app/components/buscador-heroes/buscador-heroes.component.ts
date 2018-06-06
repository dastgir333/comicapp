import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador-heroes',
  templateUrl: './buscador-heroes.component.html'
})
export class BuscadorHeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string = "";

  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroe( params['termino'] );
      this.termino = params['termino'];
    });
  }

}
