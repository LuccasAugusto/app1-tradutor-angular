import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})

export class TentativasComponent implements OnInit {

  @Input() public tentativas: number

  public coracoes: Coracao[] = []

  constructor() {}

  ngOnChanges() {
    
    if (this.coracoes.length == 0 ) {
      this.construindoTentativas()
    }

    if (this.tentativas !== this.coracoes.length ) {
      this.esvaziarCaracao()
    } 
   
  }

  ngOnInit(): void {}


  public construindoTentativas(): void {

    while (this.coracoes.length < this.tentativas) {
      this.coracoes.push( new Coracao(true) ) 
    }

  }

  public esvaziarCaracao(): void {

    this.coracoes[this.tentativas - 1].cheio = false

  }



}
