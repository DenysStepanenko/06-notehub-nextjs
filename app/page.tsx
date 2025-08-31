import css from './page.module.css';

export default function Home() {
  return (
    <main className={css.main}>
      <h1 className={css.title}>Welcome to NoteHub</h1>
      <p className={css.description}>
        Your personal note-taking application built with Next.js
      </p>
    </main>
  );
}

