import axios from 'axios';
import { Note, NewNoteData } from '../types/note';
import { NoteListResponse } from './types';

const api = axios.create({
  baseURL: 'https://notehub-api.vercel.app/api',
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    'Content-Type': 'application/json',
  },
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

