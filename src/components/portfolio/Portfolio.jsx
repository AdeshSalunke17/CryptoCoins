import React from "react";
import { motion } from "framer-motion";
import style from "./Portfolio.module.css";
import Slider1 from "./Slider1";

const imageAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};
const Portfolio = () => {
  return (
    <>
      <div
        className={`w-100 bg-black py-5 d-flex flex-wrap justify-content-center ${style.main}`}
      >
        <div className={`w-100 text-center ${style.headingdiv}`}>
          <h1 className="text-white">
            <b
              style={{
                background:
                  "linear-gradient(90deg,#ff9332,#ff6085 50%,#e548ff)",
                color: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              The Ultimate
            </b>
            &nbsp; Crypto Portfolio Tracker
          </h1>
          <p style={{ color: "#bfbfbf" }} className="mt-3">
            Connect all your wallets and exchanges in a few clicks. Start
            effectively managing your entire portfolio – crypto, DeFi, and NFTs
            –from a single dashboard.
          </p>
        </div>
        <div className={`w-100 mt-5 px-5 ${style.mainImageDiv}`}>
          <motion.img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            style={{ width: "100%", height: "100%" }}
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
          />
        </div>
        <Slider1 />
      </div>
    </>
  );
};

export default Portfolio;
