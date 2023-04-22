import { Container } from "./Container";
import { motion } from "framer-motion"

export function Hero() {
  return (
    <Container className="relative pt-20 pb-16 text-center lg:pt-32 h-full">
      <h1
        className="text-red-400 max-w-4xl mx-auto text-5xl font-medium tracking-tight
             font-display sm:text-7xl"
      >
        Ale<span className="text-red-700">jandro</span>
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >

      <p className="max-w-xl mx-auto mt-6 text-lg tracking-tight text-white mb-6">
        I am currently searching an intership opportunity where I can put my
        knowledge into practice, that will allow me to apply my existing
        knowledge and gain new experiences
      </p>

      </motion.div>

      <a className="relative cursor-pointer inline-flex items-center justify-center 
      p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group 
      bg-gradient-to-br from-red-700 to-blue-500 group-hover:from-purple-600
       group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none
        focus:ring-blue-300 dark:focus:ring-blue-800" href="#contact">

        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Reach me out
        </span>

      </a>

    </Container>
  );
}
