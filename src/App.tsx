import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-zinc-900 dark:text-white">
        <Navbar onClick={() => setDarkMode(!darkMode)} />
        <Home />
      </div>
    </div>
  );
};

export default App;
