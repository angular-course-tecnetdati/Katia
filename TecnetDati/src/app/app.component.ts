import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CaroselloComponent } from './carosello/carosello.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,MenuComponent,CaroselloComponent,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TecnetDati';
}
