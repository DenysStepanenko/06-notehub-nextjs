import { Note } from '../types/note';

export interface NoteListResponse {
  notes: Note[];
  total: number;
}

