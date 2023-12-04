import { motion } from "framer-motion";

export const About = () => {
  const textvariants = {
    initial: {
      x: -450,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.7,
      },
    },
  };
  
  const scrollAnimate = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity:1 },
    whileInView: { opacity: 1 }
  };

  return (
    <div className="about-page-bg">
      <div className="container mx-auto">
        <motion.div
          className="about"
          variants={textvariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-center about__title pt-4"
            variants={textvariants}
          >
            About page
          </motion.h1>
          <motion.p className="text-center about__para" variants={textvariants}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi qui,
            quos repudiandae quibusdam.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap about-page my-5"
          variants={textvariants}
          initial="initial"
          animate="animate"
          
        >
          <motion.div className="about-text-container" variants={textvariants}>
            <motion.h3 variants={textvariants}>
              Rediscover a great shopping tradition
            </motion.h3>
            <motion.p variants={textvariants}>
              You deserve to look and feel your best Find the perfect fit for
              you
            </motion.p>
          </motion.div>
          <div className="img-square">
            <img
              //   variants={textvariants}
              className="rounded-md shadow-md"
              src="./src/assets/images/image1.webp"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          className="flex about-page my-5"
          variants={scrollAnimate}
          initial="visible"
        //   animate="visible"
        >
          <motion.div className="about-text-container" variants={textvariants}>
            <motion.h3 variants={textvariants}>
              Rediscover a great shopping tradition
            </motion.h3>
            <motion.p variants={textvariants}>
              You deserve to look and feel your best Find the perfect fit for
              you
            </motion.p>
          </motion.div>
          <div className="img-square">
            <img
              //   variants={textvariants}
              className="rounded-md shadow-md"
              src="./src/assets/images/image1.webp"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
