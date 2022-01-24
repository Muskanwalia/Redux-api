import React from "react";
import './App.css';
import Provider from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TableData from "./Components/Table.js";
import UserDetail from "./Components/userDetails";
import store from "./Redux/store.js";

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<TableData />}></Route>
        <Route path="/:id" element={<UserDetail />}></Route>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
