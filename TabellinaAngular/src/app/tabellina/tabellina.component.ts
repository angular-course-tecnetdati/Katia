import { Component , Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabellina',
  imports: [CommonModule],
  templateUrl: './tabellina.component.html',
  styleUrl: './tabellina.component.css'
})
export class TabellinaComponent implements OnInit  {

  ngOnInit(): void {

    this.leggiinput(this.numeroinput);
  }

  @Input() numeroinput!: number;

  numeroHover: number | null = null;

  leggiinput(numeroi: number) {


    console.log ('arriv '+ numeroi);
  }
}
