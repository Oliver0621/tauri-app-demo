import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { getVersion } from "@tauri-apps/api/app"

import "./App.css";

function App() {
  const [currentVersion, setCurrentVersion] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    getVersion()
      .then(res => {
        setCurrentVersion(res)
      })
  }, [setCurrentVersion])

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <h1>{"当前版本" + currentVersion}</h1>

    </div>
  );
}

export default App;
