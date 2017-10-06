import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''

  public rodada: number = 0
  public progresso: number = 0
  public rodadaFrase: Frase
  public tentativas: number = 3

  @Output() public eventoEncerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaFrase()
    
   }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    
    this.resposta = (<HTMLInputElement> resposta.target).value
    //console.log(this.resposta)

  }

  public verificarResposta() : void {
    if(this.rodadaFrase.frasePtBr == this.resposta) {

      this.rodada++

      if(this.rodada === 4) {
        this.eventoEncerrarJogo.emit('vitoria')
      }

      this.atualizaFrase()
      this.progresso = this.progresso + (100/this.frases.length)
    } else {
      this.tentativas--

      if(this.tentativas === -1) {
        this.eventoEncerrarJogo.emit('derrota')
      }
    }
  }

  public atualizaFrase() : void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }

}
