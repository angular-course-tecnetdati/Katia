import { Component , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { ServicelistService } from '../Service/servicelist.service';

@Component({
  selector: 'app-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  VoceList: number = 0;
  constructor(private utilities: ServicelistService)  {

  }

  arraylista: string [] = [];



  ngOnInit(): void {

    this.arraylista = this.utilities.RitornaArray();

  }

  EliminaVoe(Voce: number) {
    this.VoceList= Voce ;
    //this.isClicked = !this.isClicked; // cambio il valore ogni volta che viene clicckato
    //this.bottoneCliccato = this.bottoneCliccato === numero ? null : numero;
    console.log (Voce);

    this.utilities.Elimina(Voce);


    }

  //@Input() VoceList!: string;


      // leggiinput(VoceList: string) {

      // this.arraylista.push(VoceList);

      // }


}


