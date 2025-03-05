import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicelistService {
  arraylista: string [] = [];
constructor() { }

AggiornaArray(Listelement: string)   {
  this.arraylista.push(Listelement);
  console.log(this.arraylista);

}

Elimina(Listelement: number)   {
  this.arraylista.splice(Listelement,1);
  console.log(this.arraylista);

}

RitornaArray() : string[]  {
  return   this.arraylista;
}




}

