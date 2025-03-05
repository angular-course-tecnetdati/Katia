import { Component ,input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from "./list/list.component";
import { FormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicelistService } from './Service/servicelist.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent,FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TODO LIST';

  arraytodo: string []= [];
  VoceList: string = '';

  constructor(public utilities: ServicelistService)  { }
  bottoneCliccato: number | null = null; // Tiene traccia del bottone cliccato

  onClick(Voce: string) {
    this.VoceList= Voce ;
    //this.isClicked = !this.isClicked; // cambio il valore ogni volta che viene clicckato
    //this.bottoneCliccato = this.bottoneCliccato === numero ? null : numero;
    console.log (Voce);

    this.utilities.AggiornaArray(Voce);


    }


 }
