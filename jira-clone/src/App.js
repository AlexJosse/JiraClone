import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import Jira from "./components/index.jsx";

const App = () => (
  <Provider store={store}>
    <Jira />
  </Provider>
);

export default App;