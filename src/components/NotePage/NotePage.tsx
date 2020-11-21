import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectById } from "../../redux";
import { Note } from "../Note/Note";

export const blankNote: Note = {
  id: "",
  title: "New Note",
  content: "",
  tagIds: [],
};

export function NotePage() {
  const { noteId } = useParams<{ noteId: string }>();
  const note = useSelector(
    (state: State): Note =>
      selectById({ state, entityName: "notes", id: noteId })
  );

  return (
    <main>
      {noteId === "new" && <Note note={blankNote} />}
      {!note && <p>Note not found!</p>}
      {note && <Note note={note} />}
    </main>
  );
}
