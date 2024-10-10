import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchTerm = signal<string>('');

  @Output() searchEvent = new EventEmitter<string>();

  constructor(private _apiService: ApiService) {}

  onSearchTermChange(): void {
    this.searchEvent.emit(this.searchTerm());
  }
}
