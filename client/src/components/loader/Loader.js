import React from "react";
import { ErrorBoundary } from "../index";
import { motion } from "framer-motion";
import { Paragraph, Title } from "../../container/components";

const Loader = () => (
  <ErrorBoundary>
    <div
      style={{ position: "absolute", top: "20%", right: "25%", left: "25%" }}
    >
      <Title textAlign="center" size={30}>
        Pencil Writer
      </Title>
      <motion.div
        animate={{ scale: 1.2, opacity: 0.5 }}
        transition={{
          yoyo: Infinity,
          duration: 0.4,
          ease: "easeInOut",
        }}
        whileHover={{ padding: 30 }}
      >
        <Paragraph textAlign="center" color="white" size={40}>
          Please wait. Loading...
        </Paragraph>{" "}
      </motion.div>
    </div>
  </ErrorBoundary>
);

export default Loader;
