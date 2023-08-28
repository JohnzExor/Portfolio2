import { motion } from "framer-motion";
import { BsSendFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div
      className="h-screen w-full justify-center items-center flex"
      id="contact"
    >
      <motion.div className="contact-container text-center flex justify-center items-center gap-20">
        <motion.h1
          className="contact-title text-9xl mb-4"
          whileInView={{ y: [100, 100, 0] }}
          transition={{ ease: "easeOut", duration: 3 }}
        >
          Lets Talk
        </motion.h1>
        <motion.form
          className="text-center shadow-2xl p-10 rounded-2xl border-t-4 border-black"
          whileInView={{ opacity: [0, 0, 0, 1], y: [50, 0] }}
          transition={{ ease: "easeOut", duration: 5 }}
        >
          <h1 className="mb-4 text-2xl font-bold">Ask me anything</h1>
          <textarea
            className="contact-textarea w-full h-80 border p-4 border-b-4 border-black"
            placeholder="Enter your message"
          />
          <br />
          <input
            className="p-4 border-b-4"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="p-4 border-b-4"
            type="email"
            placeholder="Enter your email"
          />
          <br />
          <div className="flex gap-4 items-center justify-center mt-4">
            <p>Send me a Message.</p>
            <button
              className="flex bg-black text-white p-2 rounded-lg hover:bg-white hover:text-black hover:duration-500 gap-4 hover:animate-pulse"
              type="submit"
            >
              <BsSendFill className="text-2xl" />
              Send
            </button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
