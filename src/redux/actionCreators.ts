import { ActionTypes } from "./actionTypes";

export class ActionCreators {
  static Notes = {
    save(payload: string) {
      return {
        type: ActionTypes.Notes.SAVE,
        payload,
      };
    },
  };
}
