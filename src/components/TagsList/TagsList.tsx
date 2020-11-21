import * as React from "react";
import { Tag } from "../Tag";

export interface TagsListProps {
  tagIds: string[];
}

export function TagsList({ tagIds = [] }: TagsListProps): React.ReactNode {
  return (
    <>
      {tagIds.map(tagId => (
        <Tag id={tagId} />
      ))}
    </>
  );
}
