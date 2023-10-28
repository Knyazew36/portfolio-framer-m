import { motion, useInView } from "framer-motion";

import "./services.scss";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
    y: 100,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
          Veniam, nulla?
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Lorem</motion.b> ipsum.
          </h1>
        </div>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Lorem</motion.b> ipsum.
          </h1>
          <button>What we do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Lorem.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            nesciunt perspiciatis facere. Explicabo voluptate harum at optio
            quisquam. Qui a amet deserunt aperiam unde accusamus autem
            consectetur expedita placeat ad!
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Lorem.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            nesciunt perspiciatis facere. Explicabo voluptate harum at optio
            quisquam. Qui a amet deserunt aperiam unde accusamus autem
            consectetur expedita placeat ad!
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Lorem.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            nesciunt perspiciatis facere. Explicabo voluptate harum at optio
            quisquam. Qui a amet deserunt aperiam unde accusamus autem
            consectetur expedita placeat ad!
          </p>
          <button>GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
