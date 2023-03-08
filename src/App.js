import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import Greeting from "./components/Greeting";
import "./App.css"

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
