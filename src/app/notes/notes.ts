import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../model/notes.model';

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

  notes = signal<Note[]>(this.loadNotes());
  search = signal('');

  addNote(note: string) {
    if (!note.trim()) return;
    this.notes.update((list) => [...list, { id: Date.now(), text: note }]);
  }

  deleteNote(id: number) {
    this.notes.update((list) => list.filter((note) => note.id !== id));
  }

  filteredNotes = computed(() =>
    this.notes().filter((n) => n.text.toLowerCase().includes(this.search().toLowerCase())),
  );

  private loadNotes(): Note[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
}
