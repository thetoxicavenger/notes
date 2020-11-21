import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectById } from "../../redux";

export interface NoteLinkProps {
  id: Id;
}

export function NoteLink({ id = "" }: NoteLinkProps) {
  const { title = "" } = useSelector((state: State) =>
    selectById({ state, entityName: "notes", id })
  );
  return <Link to={`/notes/${id}`}>{title}</Link>;
}
