import React from "react";
import { Provider } from "react-redux";

import CourceList from "./components/CourseList";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <CourceList />
    </Provider>
  );
}

export default App;
