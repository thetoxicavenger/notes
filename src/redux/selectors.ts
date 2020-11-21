import { initialState } from "./reducers";

export function selectById({
  state = initialState,
  entityName,
  id = "",
}: {
  state: State;
  entityName: EntityName;
  id: string;
}): State[EntityName]["byId"][Id] {
  return state[entityName].byId[id];
}

export function selectAll({
  state,
  entityName,
}: {
  state: State;
  entityName: EntityName;
}): Array<Note> {
  return state[entityName].allIds.map((id: Id) => state[entityName].byId[id]);
}
