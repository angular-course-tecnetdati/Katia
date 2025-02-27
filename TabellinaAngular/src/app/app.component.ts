import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElenconumeriComponent } from "./elenconumeri/elenconumeri.component";
import { TabellinaComponent } from './tabellina/tabellina.component';

@Component({
  selector: 'app-root',
  imports: [ ElenconumeriComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TabellinaAngular';
}
