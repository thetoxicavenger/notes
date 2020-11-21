import * as React from "react";
import { TagsList } from "../TagsList";

export interface NoteProps {
  note: Note;
}

export function Note({ note }: NoteProps) {
  return (
    <>
      <h1>
        {note.title} <button>Back</button>
      </h1>
      <div>
        <textarea>{note.content}</textarea>
      </div>
      <div>
        <TagsList tagIds={note.tagIds} />
      </div>
    </>
  );
}
