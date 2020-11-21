import { Action } from "redux";

// todo this typing is messy
export const initialState: State = {
  notes: {
    byId: {},
    allIds: [],
  },
  tags: {
    byId: {},
    allIds: [],
  },
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
