import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import AnimatedText from "./AnimatedText";
import resume from "../../data/resume.json";

const WorkDetails = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);
  console.log("work: ", work);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <ul>
          {work.map((item, index) => (
            <li
              key={index}
              className="text-dark/75 dark:text-light/50 font-medium xs:text-sm"
            >
              <span className="mr-2 text-2xl">&#8226;</span> {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const WorkExperience = () => {
  const [resumeData, setResumeData] = useState(resume);

  useEffect(() => {
    setResumeData(resume);
  }, []);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div>
      <AnimatedText
        text="Work Experience"
        className="font-bold text-8xl my-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16"
      />

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {resumeData["experienceWork"].map((item, index) => (
            <WorkDetails
              key={index}
              position={item.position}
              company={item.company}
              companyLink={item.companyLink}
              time={item.time}
              address={item.address}
              work={item.work}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
