import * as React from "react";
import { Tag } from "../Tag";

export interface TagsListProps {
  tagIds: string[];
}

export function TagsList({ tagIds = [] }: TagsListProps) {
  return (
    <ul>
      {tagIds.map((tagId) => {
        return (
          <li>
            <Tag key={tagId} id={tagId} />
          </li>
        );
      })}
    </ul>
  );
}
