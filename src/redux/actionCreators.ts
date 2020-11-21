import { ActionTypes } from "./actionTypes";

export class ActionCreators {
  static Notes = {
    create(title: Note["title"]) {
      return {
        type: ActionTypes.Notes.CREATE,
        payload: title,
      };
    },
    save(content: string) {
      return {
        type: ActionTypes.Notes.SAVE,
        payload: content,
      };
    },
  };
}
