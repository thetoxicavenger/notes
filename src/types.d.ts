type Id = string;

interface Note {
  id: Id;
  title: string;
  content: string;
  tagIds: string[];
}

interface Tag {
  id: Id;
  name: string;
}

interface Entity<K> {
  byId: Record<Id, K>;
  allIds: string[];
}

type EntityName = "notes" | "tags";

type Entities = {
  notes: Entity<Note>;
  tags: Entity<Tag>;
};

type State = {
  [K in EntityName]: Entities<K>;
};

namespace Notes {
  interface ActionTypes {
    SAVE: "SAVE";
  }
  interface ActionCreators {
    save: (
      payload: string
    ) => { type: Notes.ActionTypes["SAVE"]; payload: string };
  }
}
