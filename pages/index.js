import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer"
import ProjectBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"
import { motion } from "framer-motion";
import {fadeIn} from "../variants"

const Home = () => {
  return (
  <div className="bg-black/60 h-screen">
    <div className="w-full h-full bg-gradient-to-r from primary/10 via-black/30 to-black/10 ">
      <div className="text-center flex flex-col justify-center xl:p-40 xl:text-left h-screen mx-auto mt-12">
        <motion.h1 variants={fadeIn('down',0.2)} initial="hidden" animate="show" exit="hidden" className="h1">Transforming Ideas <br/> Into{''} <span className="text-[#76f124]">Digital Reality</span></motion.h1>
        <motion.p variants={fadeIn('down',0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">Now more than ever—your vote matters. Pennsylvania’s future hangs in the balance and climate is on the ballot. Are you ready to go and vote? Our next election is on November 5th, and unless you are registered by October 18, you won’t be able to vote!</motion.p>
        <div className="flex justify-center xl:hidden relative">
          <ProjectBtn/>
        </div>
        <motion.div variants={fadeIn('down',0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
          <ProjectBtn/>
        </motion.div>
      </div>
    </div>
    <div className="w-[1200px] h-full absolute right-0 bottom-20">
      <ParticlesContainer/>
      <motion.div variants={fadeIn('up',0.5)} initial="hidden" animate="show" exit="hidden" transition={{duration:1 ,ease:"easeInOut"}} className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg-bottom-0 lg:right-[8%]">
        <Avatar/>
      </motion.div>
    </div>
  </div>
  );
};

export default Home;
