import React, { FC } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { motion } from "framer-motion";

interface IProps {
  direction: "up" | "down";
}

const ScrollSign: FC<IProps> = ({ direction }) => {
  return (
    <div
      className={`w-11 h-16 rounded-xl bg-black/5 backdrop-blur flex flex-col justify-center items-center animate-bounce absolute left-1/2 bottom-6`}
    >
      {direction === "up" ? (
        <BsChevronDoubleUp size="2em" />
      ) : (
        <BsChevronDoubleDown size="2em" />
      )}
    </div>
  );
};

export default ScrollSign;
