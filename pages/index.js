import Image from "next/image";

import ParticlesContainer from '../components/ParticlesContainer';
import ProyectsBtn from '../components/ProjectsBtn';
import Avatar from "../components/Avatar";

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* Texto */}
      {/* <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10"> */}
      {/* <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto"> */}
      {/* Titulo */}
      {/* <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1">
            Transformando ideas <br /> hacia{' '}
            <span className="text-accent">la realidad</span>
          </motion.h1> */}

      {/* Subtitulo */}
      {/* <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt porro neque voluptatibus iure, eligendi
            cum illo quidem, atque eveniet, temporibus omnis est! Cumque non reprehenderit libero, ad suscipit enim.
          </motion.p> */}
      {/* Btn */}
      {/* <div className="flex justify-center xl:hidden relative">
            <ProyectsBtn />
          </div>
          <motion.div variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProyectsBtn />
          </motion.div> */}
      {/* </div> */}
      {/* </div> */}
      {/* Imagen */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div> */}
        {/* Particulas */}
        <ParticlesContainer />
        {/* avatar img */}
        {/* <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[768px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Home;