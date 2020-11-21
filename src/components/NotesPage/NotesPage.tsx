import * as React from "react";
import { NotesList } from "../NotesList";

export interface NotesPageProps {}

export function NotesPage({}: NotesPageProps) {
  return (
    <>
      <h1>Notes</h1>
      <NotesList />
    </>
  );
}
