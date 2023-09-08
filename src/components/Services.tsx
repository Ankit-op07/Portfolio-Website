import React from "react";
import WebIcon from "./icons/WebIcon";
import UiIcon from "./icons/UiIcon";
import GraphicIcon from "./icons/GraphicIcon";
import CodeIcon from "./icons/CodeIcon";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="mx-20">
      {/* Title */}
      <div className="text-center mt-20 text-4xl font-semibold">
        Our Services
      </div>
      {/* cards */}
      <div className="flex flex-wrap justify-evenly mt-12 items-center">
        <motion.div>
          <div className="h-52 w-48 border-2 border-black  mt-8 rounded-xl">
            <div className="flex flex-col items-center mt-4">
              <WebIcon height={120} width={120} />
              <div className="font-semibold mt-4">Web Development</div>
            </div>
          </div>
        </motion.div>

        <div className="h-52 w-48 border-2 border-black  mt-8 rounded-xl">
          <div className="flex flex-col items-center mt-4">
            <UiIcon height={120} width={120} />
            <div className="font-semibold mt-4">UI/UX</div>
          </div>
        </div>
        <div className="h-52 w-48 border-2 border-black  mt-8 rounded-xl">
          <div className="flex flex-col items-center mt-4">
            <GraphicIcon height={120} width={120} />
            <div className="font-semibold mt-4">Graphic Design</div>
          </div>
        </div>
        <div className="h-52 w-48 border-2 border-black  mt-8 rounded-xl">
          <div className="flex flex-col items-center mt-4">
            <CodeIcon height={120} width={120} />
            <div className="font-semibold mt-4">Problem Solving</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
