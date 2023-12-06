import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  // const { ref: inViewRef, inView } = useInView({ once: true });
  const viewAnimate = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      if (inView) {
        viewAnimate.start("visible");
        // window.scrollTo(0, 0);
      }
    }, 1000);
  }, [inView]);

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
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="about-page-bg">
      <div className="container mx-auto">
        <motion.div
          className="about "
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
            <motion.h3
              variants={textvariants}
              className="text-lg md:text-2xl text-left md:text-left"
            >
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
        <div className="divider">
          <motion.div
            className="text-side"
            variants={scrollAnimate}
            initial="hidden"
            animate={viewAnimate}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <h2 className="text-sm md:text-4xl">"Experience"</h2>
          </motion.div>
          <div className="line-side"></div>
        </div>
        <div ref={ref} className="overflow-hidden">
          <motion.div
            className="flex flex-row-reverse about-page my-5"
            variants={scrollAnimate}
            initial="hidden"
            animate={viewAnimate}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="about-text-container text-right"
              variants={scrollAnimate}
            >
              <motion.h3
                variants={scrollAnimate}
                // transition={{ delay: 0.8, duration: 0.5 }}
              >
                Rediscover a great shopping tradition
              </motion.h3>
              <motion.p variants={scrollAnimate}>
                You deserve to look and feel your best Find the perfect fit for
                you
              </motion.p>
            </motion.div>

            <div className="img-square">
              <img
                className="rounded-md shadow-md"
                src="./src/assets/images/image1.webp"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
