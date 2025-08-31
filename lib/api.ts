import axios from 'axios';
import { Note, NewNoteData, NoteListResponse } from '../types/note';

const api = axios.create({
  baseURL: 'https://next-docs-api.onrender.com',
});

export const getNotes = async (search: string = '', page: number = 1, perPage: number = 12): Promise<NoteListResponse> => {
  const response = await api.get<NoteListResponse>('/notes', {
    params: { search, page, perPage }
  });
  return response.data;
};

export const getSingleNote = async (id: string): Promise<Note> => {
  const response = await api.get<Note>(`/notes/${id}`);
  return response.data;
};

export const createNote = async (noteData: NewNoteData): Promise<Note> => {
  const response = await api.post<Note>('/notes', noteData);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await api.delete<Note>(`/notes/${id}`);
  return response.data;
};

