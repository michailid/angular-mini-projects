import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  imports: [FormsModule],
  templateUrl: './notes.html',
  styleUrl: './notes.css',
})
export class Notes {
  private STORAGE_KEY = 'notes_app';

  constructor() {
    effect(() => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.notes()));
      }
    });
  }

  notes = signal<string[]>(this.loadNotes());
  search = signal('');

  addNote(note: string) {
    if (!note.trim()) return;
    this.notes.update((list) => [...list, note]);
  }

  deleteNote(index: number) {
    this.notes.update((list) => list.filter((_, i) => i !== index));
  }

  filteredNotes = computed(() =>
    this.notes().filter((n) => n.toLowerCase().includes(this.search().toLowerCase())),
  );

  private loadNotes(): string[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
}
