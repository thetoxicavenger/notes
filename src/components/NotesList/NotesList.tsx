import * as React from "react";
import { useSelector } from "react-redux";
import { NoteLink } from "../NoteLink";

export interface NotesListProps {}

export function NotesList({}: NotesListProps): React.ReactNode {
  const notesIds = useSelector((state: State): Id[] => state.notes.allIds);
  return (
    <ul>
      {notesIds.map((id) => {
        return (
          <li>
            <NoteLink key={id} id={id} />
          </li>
        );
      })}
    </ul>
  );
}
