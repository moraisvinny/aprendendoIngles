import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public exibePainel: boolean = true;
  public tipoEncerramento: string
  
  public encerrarJogo(tipo): void {
    
    this.exibePainel = false
    this.tipoEncerramento = tipo
  }

  public reiniciar(): void {

    this.exibePainel = true;
    this.tipoEncerramento = undefined;

  }
}
