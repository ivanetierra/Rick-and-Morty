import { Component } from '@angular/core';
import { CharacterListComponent } from "../../components/character-list/character-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharacterListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
