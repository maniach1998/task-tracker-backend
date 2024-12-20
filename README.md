# Nooro Task Tracker (Backend)

A modern task tracking application built with Next.js, TypeScript, and a Node.js backend.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## Project Structure

The project consists of two main parts:

- `task-tracker-frontend`: Next.js frontend application
- `task-tracker-backend`: Node.js backend server

## Getting Started

### 1. Clone the Repository (frontend)

```bash
git clone https://github.com/maniach1998/task-tracker-backend
cd task-tracker-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup environment variables

Copy the .env.example file to .env and fill in the values.

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

This will generate the production build in the `dist` folder.

### 6. Start production server

```bash
npm start
```

The backend application will be available at http://localhost:4000 (or a port you specify in the .env file)

## Development

- Frontend: Built with Next.js 14, React Query, and Tailwind CSS
- Backend: Express.js with TypeScript
- Both projects use TypeScript for type safety

## Available Scripts

Backend:

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server

## Features

- Create, edit, and delete tasks
- Color-code your tasks
- Mark tasks as complete/incomplete
- Real-time updates using React Query
- Responsive design
- Form validation using Zod
- Toast notifications for user feedback

## Tech Stack

- **Frontend**:

  - Next.js 14
  - TypeScript
  - React Query
  - Tailwind CSS
  - Shadcn UI
  - React Hook Form
  - Zod

- **Backend**:
  - Node.js
  - Express
  - TypeScript
  - MySQL (Community Server)
