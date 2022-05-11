import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
      </Routes>

    </Router>
    
  );
}

export default App;
