"use client";

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createNote } from '../../lib/api';
import { NewNoteData } from '../../types/note';
import css from './NoteForm.module.css';

interface NoteFormProps {
  onClose: () => void;
}

const validationSchema = Yup.object({
  title: Yup.string()
    .min(3, 'Title must be at least 3 characters')
    .max(50, 'Title must be less than 50 characters')
    .required('Title is required'),
  content: Yup.string()
    .min(10, 'Content must be at least 10 characters')
    .required('Content is required'),
  categoryId: Yup.string()
    .required('Category is required'),
});

const NoteForm = ({ onClose }: NoteFormProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      toast.success('Note created successfully!');
      onClose();
    },
    onError: () => {
      toast.error('Failed to create note');
    },
  });

  const initialValues: NewNoteData = {
    title: '',
    content: '',
    categoryId: '',
  };

  return (
    <div className={css.form}>
      <h2>Create New Note</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          mutation.mutate(values);
        }}
      >
        <Form>
          <div className={css.field}>
            <Field
              type="text"
              name="title"
              placeholder="Note title"
              className={css.input}
            />
            <ErrorMessage name="title" component="div" className={css.error} />
          </div>

          <div className={css.field}>
            <Field
              as="textarea"
              name="content"
              placeholder="Note content"
              className={css.textarea}
              rows={5}
            />
            <ErrorMessage name="content" component="div" className={css.error} />
          </div>

          <div className={css.field}>
            <Field
              type="text"
              name="categoryId"
              placeholder="Category"
              className={css.input}
            />
            <ErrorMessage name="categoryId" component="div" className={css.error} />
          </div>

          <div className={css.buttons}>
            <button
              type="submit"
              disabled={mutation.isPending}
              className={css.submitButton}
            >
              {mutation.isPending ? 'Creating...' : 'Create Note'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className={css.cancelButton}
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default NoteForm;

