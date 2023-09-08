import React from "react";
import UiIcon from "../components/icons/UiIcon";
import WebIcon from "../components/icons/WebIcon";
import CodeIcon from "../components/icons/CodeIcon";
import GraphicIcon from "../components/icons/GraphicIcon";
import PhoneIcon from "../components/icons/PhoneIcon";
import MailIcon from "../components/icons/MailIcon";
import { motion } from "framer-motion";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";

const Home = () => {
  const text = "Full Stack Web Developer & UI/UX Designer";
  return (
    <>
      <div className="flex w-full mt-32 select-none">
        <div className="w-1/2 mx-20">
          <div className="ml-4 ">
            <div className="mb-4">Hi, I am Ankit Nagar and I am a </div>
            <div className="text-4xl">
              <motion.div className="text">
                {text.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="flex justify-between mt-40">
            <div className="flex gap-2 items-center  cursor-pointer bg-black w-28 text-gray-200 text-center border rounded-3xl px-4 py-1.5">
              <PhoneIcon />
              Contact
            </div>
            <div className="flex gap-2 items-center cursor-pointer bg-black w-28 text-gray-200 text-center border rounded-3xl px-4 py-1.5 mr-60">
              <MailIcon />
              Email
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <UiIcon height={60} width={60} />
              <div>UI/UX</div>
            </div>
          </div>

          <div className="flex justify-center gap-40 mt-8 mb-8">
            <div className="flex flex-col items-center">
              <WebIcon height={60} width={60} />
              <div>Web Development</div>
            </div>

            <div className="flex flex-col items-center">
              <CodeIcon height={60} width={60} />
              <div>Problem Solving</div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <GraphicIcon height={60} width={60} />
              <div>Graphic Design</div>
            </div>
          </div>
        </div>
      </div>



      <Services/>
      <Projects/>
      <Reviews/>

    </>
  );
};

export default Home;
