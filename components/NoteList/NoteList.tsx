"use client";

import Link from 'next/link';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteNote } from '../../lib/api';
import { Note } from '../../types/note';
import css from './NoteList.module.css';

interface NoteListProps {
  notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      toast.success('Note deleted successfully!');
    },
    onError: () => {
      toast.error('Failed to delete note');
    },
  });

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <ul className={css.noteList}>
      {notes.map((note) => (
        <li key={note.id} className={css.noteItem}>
          <Link href={`/notes/${note.id}`} className={css.noteLink}>
            <h3 className={css.noteTitle}>{note.title}</h3>
            <p className={css.noteContent}>{note.content}</p>
            <span className={css.noteCategory}>{note.tag}</span>
          </Link>
          <button
            onClick={() => handleDelete(note.id)}
            className={css.deleteButton}
            disabled={deleteMutation.isPending}
          >
            {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;

