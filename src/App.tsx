import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NotePage, NotesPage } from "./components";

// TODO routing's not up yet

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/notes">
          <NotesPage />
        </Route>
        <Route path="/notes/:noteId">
          <NotePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
