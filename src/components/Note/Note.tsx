import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectById } from "../../redux";
import { TagsList } from "../TagsList";

export interface NoteProps {}

export function Note({}: NoteProps) {
  const { noteId } = useParams<{ noteId: string }>();
  const { title = "", content = "", tagIds = [] } = useSelector(
    (state: State): Note =>
      selectById({ state, entityName: "notes", id: noteId })
  );
  return (
    <>
      <h1>
        {title} <button>Back</button>
      </h1>
      <div>
        <textarea>{content}</textarea>
      </div>
      <div>
        <TagsList tagIds={tagIds} />
      </div>
    </>
  );
}
