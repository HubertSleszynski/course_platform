import Img1 from "../assets/about1.png";
import Img2 from "../assets/about2.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          className="md:w-1/2"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
        >
          <img src={Img1} alt="" />
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product
            <span className="text-secondary leading-normal">
              {" "}
              for many years
            </span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
            With ongoing enhancements, our product evolves to meet your needs.
            Our commitment to continuous improvement ensures that you receive
            the best experience possible.
          </p>
          <button className="py-3 px-7 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
            Get Started
          </button>
        </motion.div>
      </div>

      <div className="my-12"></div>

      {/* 2nd about */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* img */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={Img2} alt="" className="w-full" />
        </motion.div>
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            You can Practice at any
            <span className="text-secondary leading-normal">
              {" "}
              time convinent for you
            </span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
            Practice whenever it suits you best. Our flexible scheduling
            empowers you to learn on your own terms, at your convenience.
          </p>
          <button className="py-3 px-7 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
            Join Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
