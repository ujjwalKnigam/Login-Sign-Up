import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Login from "./components/login";
import SignUp from "./components/signUp";
import { baseURL } from "./basicConfig";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <SignUp />
      </div>

    </div>
  );
}

export default App;
