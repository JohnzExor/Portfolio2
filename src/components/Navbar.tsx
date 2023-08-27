import { motion } from "framer-motion";
import { useState } from "react";
import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";
import { MdNightlight } from "react-icons/md";

interface Props {
  onClick: () => void;
}

const navBar = ({ onClick }: Props) => {
  const [menu, openMenu] = useState(false);
  return (
    <motion.div
      className="nav-items shadow-2xl fixed w-full"
      animate={{ opacity: [0, 0, 1] }}
      transition={{ ease: "easeOut", duration: 8 }}
    >
      <motion.div
        className="gap-4 p-4 pl-20 pr-20 flex items-center justify-center"
        animate={{ opacity: [0, 1] }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <label className="font-bold">Johnzyll.Dev</label>
        <MdNightlight
          className="text-2xl cursor-pointer animate-bounce"
          onClick={onClick}
        />

        <motion.ul className="nav-menu flex gap-4 float-right">
          <li>
            <a className="nav-btn cursor-pointer" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="nav-btn cursor-pointer" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-btn cursor-pointer" href="#contact">
              Contact
            </a>
          </li>
        </motion.ul>

        <BsReverseLayoutSidebarInsetReverse
          className="side-bar-btn hidden float-right text-2xl"
          onClick={() => openMenu(!menu)}
        />
      </motion.div>
    </motion.div>
  );
};

export default navBar;
