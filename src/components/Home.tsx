import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="w-full h-screen items-center flex justify-center shadow-2xl"
      id="home"
    >
      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="home-title text-8xl">
          Future Web/Game Developer
        </motion.h1>
        <motion.p
          className="text-center mt-2"
          animate={{ opacity: [0, 0, 1] }}
          transition={{ ease: "easeOut", duration: 4 }}
        >
          My dream is to become a future Web/Game Developer
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home;
