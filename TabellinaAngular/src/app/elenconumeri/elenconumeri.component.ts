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
  numeri: number[] = [1,2,3,4,5,6,7,8,9,10];
  numeroxcalcolo!:number;

  onClick(numero: number) {
    this.numeroxcalcolo= numero ;
    console.log (numero);

  }


 }

