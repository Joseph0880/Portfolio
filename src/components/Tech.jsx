import { motion } from "framer-motion";
import { SectionWrapper } from "../HOC";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { useState } from "react";

const SkillCard = ({ index, name, icon, content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () =>{
    setIsFlipped(!isFlipped);
  }
  return (
    <Tilt className="xs:w[250px] sm:w-[250px] w-full">
      <motion.div
        onClick={handleCardClick}
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer
        ${isFlipped ? 'flipped': ''}`}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px]
           py-5 px-12 min-h-[190px] flex 
           justify-evenly items-center flex-col card-inner"
        >
          {!isFlipped ? (
            <>
              <img src={icon} alt={name} className="=w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {name}
          </h3>
            </>
          ):(
            <p className="text-white text-[16px] text-center">{content}</p>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};
const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Skills</h2>
        <p
          className="mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]"
        >
          I'm proficient in both front-end and back-end development,
          specializing in creating responsive, user-friendly interfaces. My
          expertise extends to building robust and efficient server-side
          solutions, with a keen focus on delivering exceptional user
          experiences.
        </p>
      </motion.div>
      <div className="mt-20  flex flex-wrap gap-10 justify-center">
        {technologies.map((technology, index) => (
          <SkillCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");

{
  /* <div className=" mt-20 flex flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div> */
}
