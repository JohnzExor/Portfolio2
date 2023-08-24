import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full h-screen items-center flex justify-center">
      <div>
        <motion.h1
          className="home-title text-8xl"
          animate={{ x: [100, 0] }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          Future Web/Game Developer
        </motion.h1>
        <motion.p
          className="text-center mt-2"
          animate={{ opacity: [0, 0, 1] }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          My dream is to become a future Web/Game Developer
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
