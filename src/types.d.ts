type Note = {
  id: string;
  title: string;
  content: string;
  tagIds: string[];
};

type Tag = {
  id: string;
  name: string;
};

type Entities = Note | Tag;

type Entity<K> = {
  byId: Record<string, K>;
  allIds: string[];
};

type EntityName = "notes" | "tags";

type State = {
  notes: Entity<Note>;
  tags: Entity<Tag>;
};
