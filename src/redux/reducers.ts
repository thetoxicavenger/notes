import { Action } from "redux";

const entities = ["notes", "tags"];
const initialState: State = entities.reduce((acc, entity) => {
  return {
    ...acc,
    [entity]: {
      byId: {},
      allIds: []
    }
  };
}, {});

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
