export function selectById({
  state,
  entityName,
  id
}: {
  state: State;
  entityName: EntityName;
  id: string;
}) {
  return state[entityName].byId[id];
}

// export function getAll
