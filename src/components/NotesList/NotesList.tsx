import * as React from "react";
import { Note } from "..";

export interface NotesListProps {}

export function NotesList({}: NotesListProps): React.ReactNode {
  const notesIds: string[] = []; // redux
  return (
    <main>
      <section>
        <h1>Notes</h1>
        {notesIds.map(id => (
          <Note key={id} id={id} />
        ))}
      </section>
    </main>
  );
}
