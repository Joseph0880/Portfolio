import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { SectionWrapper } from "../HOC";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w[250px] sm:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px]
           py-5 px-12 min-h-[280px] flex 
           justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} 
           className="=w-16 h-16 object-contain"/>
           <h3 className="text-white text-[20px]
            font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]"
      >
       Hello! I'm Nithin, a passionate Full-Stack Developer with a solid foundation in JavaScript and front-end development concepts. My expertise lies in crafting seamless and visually stunning user interfaces, 
       and I've dedicated substantial time and effort to mastering React.js.
       I thrive on challenges and continuously expand my knowledge to stay at the forefront of technology trends. 
       Let's work together to turn your ideas into exceptional digital experiences.
      </motion.p>
      <div className="mt-20  flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about")
