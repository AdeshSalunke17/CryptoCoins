import React from "react";
import style from "./NewsCard.module.css";
import { motion } from "framer-motion";
const newsCardDiv = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      // delay:0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 1,
    },
  },
  hover: {
    border: "1px solid #dc9f50",
    y: -5,
  },
};
const NewsCard = ({ news }) => {
  return (
    <a href={news.link} target="_blank" style={{ textDecoration: "none" }} rel="noreferrer">
      <motion.div
        className={`${style.mainNewsCardDiv} pt-1`}
        variants={newsCardDiv}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className={`${style.imgDiv}`}>
          <img
            src={news.imgUrl}
            alt=""
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
        </div>
        <div
          className={`${style.newsTitleDiv} rounded-bottom py-2 px-1 d-flex`}
        >
          <p
            style={{ fontSize: "15px", color: "white", textDecoration: "none" }}
          >
            {news.title.substring(0, 30) + "..."}
          </p>
        </div>
      </motion.div>
    </a>
  );
};

export default NewsCard;
