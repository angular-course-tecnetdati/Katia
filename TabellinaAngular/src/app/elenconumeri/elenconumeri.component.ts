import { Component} from '@angular/core';
import { TabellinaComponent } from '../tabellina/tabellina.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elenconumeri',
  imports: [TabellinaComponent,CommonModule],
  templateUrl: './elenconumeri.component.html',
  styleUrl: './elenconumeri.component.css'
})

export class ElenconumeriComponent {
  isClicked = false;

  numeri: number[] = [1,2,3,4,5,6,7,8,9,10];
  numeroxcalcolo!:number;
  bottoneCliccato: number | null = null; // Tiene traccia del bottone cliccato

  onClick(numero: number) {
    this.numeroxcalcolo= numero ;
    //this.isClicked = !this.isClicked; // cambio il valore ogni volta che viene clicckato
    this.bottoneCliccato = this.bottoneCliccato === numero ? null : numero;
    console.log (numero);

  }


 }

