import React, { useState } from "react";
import { GoInfo } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const motionObject = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const InformationComponent = ({ message, formula }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="position-relative d-inline" style={{ marginLeft: "5px" }}>
      <GoInfo
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
        style={{ cursor: "pointer" }}
      />
      <AnimatePresence>
        {isShow && (
          <motion.div
            variants={motionObject}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="rounded p-3 position-absolute"
            style={{ width: "300px", background: "rgb(20,20,20)", zIndex: 1 }}
          >
            <p
              style={{
                color: "grey",
                fontSize: "12px",
                fontWeight: 400,
              }}
            >
              {message}
            </p>
            {formula && (
              <p
                style={{
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginTop: "-11px",
                }}
              >
                {formula}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InformationComponent;
