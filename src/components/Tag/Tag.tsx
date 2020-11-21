import * as React from "react";
import { useSelector } from "react-redux";
import { selectById } from "../../redux/selectors";

export interface TagProps {
  id: Id;
}

export function Tag({ id = "" }: TagProps) {
  const { name } = useSelector((state: State) =>
    selectById({
      state,
      entityName: "tags",
      id,
    })
  );
  return (
    <span>
      {name} <button>x</button>
    </span>
  );
}
