import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent implements OnInit {
  characters = signal<any[]>([]);
  currentPage = signal<number>(1);
  totalPages = signal<number>(0);

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.getCharacters();
  }
  getCharacters(page: number = 1): void {
    this._apiService.getCharacters(page).subscribe((response: any) => {
      this.characters.set(response.results);
      this.totalPages.set(response.info.pages);
    });
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((page) => page + 1);
      this.getCharacters(this.currentPage());
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update((page) => page - 1);
      this.getCharacters(this.currentPage());
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
