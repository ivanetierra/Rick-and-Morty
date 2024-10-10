import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent implements OnInit {
  characters: any = [];
  currentPage: number = 1;

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.getCharacters();
  }
  getCharacters(page: number = 1): void {
    this._apiService.getCharacters(page).subscribe(
      (response: any) => {
        this.characters = response.results;
        this.currentPage = page;
      },
      (error: any) => {
        console.error('Error getting characters:', error);
      }
    );
  }

  loadMoreCharacters(): void {
    this.currentPage++;
    this.getCharacters(this.currentPage);
  }
}
