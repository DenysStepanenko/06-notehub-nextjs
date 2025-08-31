# NoteHub - Next.js Version

Приложение для управления заметками, созданное с использованием Next.js 15 и App Router.

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Настройте переменную окружения в файле `.env.local`:
```
NEXT_PUBLIC_NOTEHUB_TOKEN=ваш_токен_здесь
```

3. Запустите приложение в режиме разработки:
```bash
npm run dev
```

4. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Структура проекта

- `/` - главная страница с информацией о приложении
- `/notes` - страница списка заметок с поиском и пагинацией
- `/notes/[id]` - страница деталей конкретной заметки

## Технологии

- Next.js 15 (App Router)
- TypeScript
- TanStack Query (React Query)
- Formik + Yup
- CSS Modules
- Axios

## Развертывание

Приложение готово для развертывания на Vercel. Не забудьте добавить переменную окружения `NEXT_PUBLIC_NOTEHUB_TOKEN` в настройках проекта на Vercel.

