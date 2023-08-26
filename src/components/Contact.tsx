import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="h-screen w-full justify-center items-center flex">
      <div>
        <motion.h1
          className=" text-7xl"
          initial={{ y: 0, scale: 1 }}
          whileInView={{ y: [0, 0, -300], scale: 0.5 }}
          transition={{ duration: 4 }}
        >
          Contact me
        </motion.h1>
        <motion.div
          className="border border-black"
          initial={{ opacity: 100, y: 100 }}
          whileInView={{ opacity: [0, 0, 1], y: 0 }}
          transition={{ duration: 5 }}
        >
          <form className="p-4 text-center">
            <input type="text" placeholder="Full name" />
            <br />
            <input type="email" placeholder="Email Address" />
            <br />
            <textarea placeholder="Message" />
            <br />
            <button>Submit</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
