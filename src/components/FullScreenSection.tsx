import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface IProps {
  children: ReactNode;
  id: string;
}

const FullScreenSection: FC<IProps> = ({ children, id }) => {
  return (
    <section
      id={id}
      style={{ scrollBehavior: "smooth" }}
      className="w-full h-screen pt-12 bg-black/50 snap-start backdrop-blur-lg"
    >
      <motion.div
        className="container mx-auto h-2/3 px-2 flex flex-col w-full justify-center items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default FullScreenSection;
