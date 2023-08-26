import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-zinc-900 dark:text-white">
        <Navbar onClick={() => setDarkMode(!darkMode)} />
        <Home />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default App;
