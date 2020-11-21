import * as React from "react";
import { useSelector } from "react-redux";
import { selectById } from "../../redux/selectors";

export interface TagProps {
  id: string;
}

export function Tag({ id = "" }: TagProps): React.ReactNode {
  const { name } = useSelector(state =>
    selectById({
      state,
      entityName: "tags",
      id
    })
  );
  return (
    <span>
      {name} <button>x</button>
    </span>
  );
}
