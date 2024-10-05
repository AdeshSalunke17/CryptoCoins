import React, { useState } from "react";
import style from "./NavBar.module.css";
import logo from "../../assets/cryptologo.png";
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { IoSearch } from "react-icons/io5";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PiGearBold } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "grey", // Change this to your desired border color
              borderRadius: "10px",
            },
            "&:hover fieldset": {
              borderColor: "grey", // Change this to your desired border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "grey", // Change this to your desired border color when focused
            },
          },
        },
      },
    },
  },
});
const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuClicked, serIsMenuClicked] = useState(false);
  return (
    <div className={`w-100 py-3 fixed-top d-flex ${style.main}`}>
      <div className="col-6 d-flex">
        <div className={`col-1 ${style.menuDiv}`}>
          {!isMenuClicked && (
            <button
              className={`${style.customButton}`}
              onClick={() => serIsMenuClicked(true)}
            >
              <CgMenuGridO style={{ fontSize: "22px" }} />
            </button>
          )}
          {isMenuClicked && (
            <button
              className={`${style.customButton}`}
              onClick={() => serIsMenuClicked(false)}
            >
              <IoClose style={{ fontSize: "22px" }} />
            </button>
          )}
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="col-lg-4 col-11 d-flex gap-2 px-4">
            <img src={logo} alt="" style={{ width: "50px", height: "35px" }} />
            <p
              style={{
                color: "white",
                marginTop: "3px",
                fontSize: "20px",
                fontWeight: "100",
              }}
            >
              Crypto<span style={{ fontWeight: "500" }}>Coins</span>
            </p>
          </div>
        </Link>
        <div className={`col-8 gap-2 py-1 ${style.optionsDiv}`}>
          <Link to="/portfolio">
            <button className={`${style.portfolioButton}`}>
              Portfolio Tracker
            </button>
          </Link>
          <Link to="/history">
            <button className={`${style.customButton}`}>History</button>
          </Link>
          <Link to="/portfolio">
            <button className={`${style.customButton}`}>Buy Crypto</button>
          </Link>

          <button className={`${style.customButton}`}>
            <CgMenuGridO style={{ fontSize: "22px" }} />
          </button>
        </div>
      </div>
      <div className="col-6 d-flex">
        <div
          className={`col-6 ${style.ref}`}
          style={{ borderRight: "1px solid grey" }}
        >
          <div className="col-10 px-4">
            <ThemeProvider theme={theme}>
              <TextField
                id="input-with-icon-textfield"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoSearch
                        style={{ fontSize: "20px", color: "whitesmoke" }}
                      />
                    </InputAdornment>
                  ),
                  style: { color: "grey" },
                }}
                variant="outlined"
                size="small"
                placeholder="Assets,Wallets,ENS"
              />
            </ThemeProvider>
          </div>
          <div className="col-2 ">
            <button
              className={`${style.customButton}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transform: isHovered ? "rotate(30deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            >
              <PiGearBold style={{ fontSize: "20px" }} />
            </button>
          </div>
        </div>
        <div className={`col-6 px-5 justify-content-between ${style.maxDiv}`}>
          <p className={`${style.loginText}`}>Login</p>
          <button
            className={`rounded-4 `}
            style={{
              border: "transparent",
              fontSize: "13px",
              fontWeight: 500,
              padding: "10px 18px",
              background: "#ff9332",
            }}
          >
            Get Started
          </button>
          <svg
            className={`width="32"`}
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            id="ic"
          >
            <g>
              <path
                opacity="0.2"
                d="M16.0011 31.1111C24.3474 31.1111 31.1133 24.3456 31.1133 16C31.1133 7.65436 24.3474 0.888885 16.0011 0.888885C7.65488 0.888885 0.888916 7.65436 0.888916 16C0.888916 24.3456 7.65488 31.1111 16.0011 31.1111Z"
                fill="#FF9332"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28 11.7343V24.5321C28 25.7101 27.0062 26.6667 25.7848 26.6667H6.21556C4.99414 26.6667 4 25.7101 4 24.5321V11.7343C4 10.7839 4.63932 9.98139 5.53117 9.70149L5.86713 9.62737C5.98188 9.60583 6.09696 9.59999 6.21556 9.59999H25.7848C25.9861 9.59999 26.1843 9.6246 26.3697 9.67689C27.3095 9.92264 28 10.7503 28 11.7343Z"
                fill="#FF9332"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.8573 7.55007V13.1204C22.8573 14.3441 21.9115 15.3374 20.749 15.3374H11.2516C10.0892 15.3374 9.14307 14.3441 9.14307 13.1204V7.55007C9.14307 6.56308 9.75151 5.7294 10.6003 5.43874L10.92 5.36208C11.0292 5.33972 11.1387 5.33333 11.2516 5.33333H20.749C20.9407 5.33333 21.1293 5.35888 21.3058 5.41318C22.2002 5.66871 22.8573 6.52794 22.8573 7.55007Z"
                fill="#EA5237"
              ></path>

              <path
                id="path1"
                d="M28 11.8907V15.8426C28 17.1103 27.0062 18.1333 25.7848 18.1333H6.21556C4.99414 18.1333 4 17.1103 4 15.8426V11.8907C4 10.8706 4.63932 10.0093 5.53117 9.70893L5.86713 9.62937C5.98189 9.60626 6.09696 9.59999 6.21556 9.59999H25.7848C25.9861 9.59999 26.1843 9.6264 26.3697 9.68252C27.3095 9.94629 28 10.8346 28 11.8907Z"
                fill="#FFB347"
              >
                <animate
                  attributeName="d"
                  dur="0.3s"
                  begin="ic.mouseenter"
                  repeatCount="1"
                  fill="freeze"
                  to="M28 11.4326V14.5941C28 15.6082 27.0062 16.4267 25.7848 16.4267H6.21556C4.99414 16.4267 4 15.6082 4 14.5941V11.4326C4 10.6165 4.63932 9.92747 5.53117 9.68714L5.86713 9.6235C5.98189 9.60501 6.09696 9.59999 6.21556 9.59999H25.7848C25.9861 9.59999 26.1843 9.62112 26.3697 9.66602C27.3095 9.87703 28 10.5877 28 11.4326Z"
                ></animate>
                <animate
                  attributeName="d"
                  dur="0.3s"
                  begin="ic.mouseleave"
                  repeatCount="1"
                  fill="freeze"
                  to="M28 11.8907V15.8426C28 17.1103 27.0062 18.1333 25.7848 18.1333H6.21556C4.99414 18.1333 4 17.1103 4 15.8426V11.8907C4 10.8706 4.63932 10.0093 5.53117 9.70893L5.86713 9.62937C5.98189 9.60626 6.09696 9.59999 6.21556 9.59999H25.7848C25.9861 9.59999 26.1843 9.6264 26.3697 9.68252C27.3095 9.94629 28 10.8346 28 11.8907Z"
                ></animate>
              </path>
              <path
                id="path2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2557 19.84H9.94637C9.50268 19.84 9.14307 19.5144 9.14307 19.1124V16.3006C9.14307 15.8992 9.50268 15.5733 9.94637 15.5733H11.2557C11.6994 15.5733 12.0593 15.8992 12.0593 16.3006V19.1124C12.0593 19.5144 11.6994 19.84 11.2557 19.84Z"
                fill="#EA5237"
              >
                <animate
                  attributeName="d"
                  dur="0.3s"
                  begin="ic.mouseenter"
                  repeatCount="1"
                  fill="freeze"
                  to="M11.2557 18.1333H9.94637C9.50268 18.1333 9.14307 17.8077 9.14307 17.4057V14.594C9.14307 14.1926 9.50268 13.8667 9.94637 13.8667H11.2557C11.6994 13.8667 12.0593 14.1926 12.0593 14.594V17.4057C12.0593 17.8077 11.6994 18.1333 11.2557 18.1333Z"
                ></animate>
                <animate
                  attributeName="d"
                  dur="0.3s"
                  begin="ic.mouseleave"
                  repeatCount="1"
                  fill="freeze"
                  to="M11.2557 19.84H9.94637C9.50268 19.84 9.14307 19.5144 9.14307 19.1124V16.3006C9.14307 15.8992 9.50268 15.5733 9.94637 15.5733H11.2557C11.6994 15.5733 12.0593 15.8992 12.0593 16.3006V19.1124C12.0593 19.5144 11.6994 19.84 11.2557 19.84Z"
                ></animate>
              </path>
              <path
                id="path3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.3985 19.84H21.0892C20.6455 19.84 20.2859 19.5144 20.2859 19.1124V16.3006C20.2859 15.8992 20.6455 15.5733 21.0892 15.5733H22.3985C22.8422 15.5733 23.2021 15.8992 23.2021 16.3006V19.1124C23.2021 19.5144 22.8422 19.84 22.3985 19.84Z"
                fill="#EA5237"
              >
                <animate
                  attributeName="d"
                  dur="0.3s"
                  begin="ic.mouseenter"
                  repeatCount="1"
                  fill="freeze"
                  to="M22.3985 18.1333H21.0892C20.6455 18.1333 20.2859 17.8077 20.2859 17.4057V14.594C20.2859 14.1926 20.6455 13.8667 21.0892 13.8667H22.3985C22.8422 13.8667 23.2021 14.1926 23.2021 14.594V17.4057C23.2021 17.8077 22.8422 18.1333 22.3985 18.1333Z"
                ></animate>
                <animate
                  attributeName="d"
                  dur="0.3s"
                  begin="ic.mouseleave"
                  repeatCount="1"
                  fill="freeze"
                  to="M22.3985 19.84H21.0892C20.6455 19.84 20.2859 19.5144 20.2859 19.1124V16.3006C20.2859 15.8992 20.6455 15.5733 21.0892 15.5733H22.3985C22.8422 15.5733 23.2021 15.8992 23.2021 16.3006V19.1124C23.2021 19.5144 22.8422 19.84 22.3985 19.84Z"
                ></animate>
              </path>

              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.3991 1.46596C27.8047 1.46596 28.1327 1.138 28.1327 0.73364C28.1327 0.327965 27.8047 0 27.3991 0C26.9947 0 26.6667 0.327965 26.6667 0.73364C26.6667 1.138 26.9947 1.46596 27.3991 1.46596ZM28.4183 29.7198C28.4183 29.3154 28.0903 28.9875 27.6846 28.9875C27.2803 28.9875 26.9523 29.3154 26.9523 29.7198C26.9523 30.1255 27.2803 30.4534 27.6846 30.4534C28.0903 30.4534 28.4183 30.1255 28.4183 29.7198ZM3.24382 31.2467C3.24382 30.841 2.91585 30.5131 2.51148 30.5131C2.10712 30.5131 1.77783 30.841 1.77783 31.2467C1.77783 31.6524 2.10712 31.9804 2.51148 31.9804C2.91585 31.9804 3.24382 31.6524 3.24382 31.2467ZM32.0001 10.5811C32.0001 10.1754 31.6721 9.84748 31.2664 9.84748C30.862 9.84748 30.5341 10.1754 30.5341 10.5811C30.5341 10.9868 30.862 11.3148 31.2664 11.3148C31.6721 11.3148 32.0001 10.9868 32.0001 10.5811ZM3.84431 3.84344C3.84431 3.43908 3.51634 3.11112 3.11198 3.11112C2.70761 3.11112 2.37833 3.43908 2.37833 3.84344C2.37833 4.24912 2.70761 4.57708 3.11198 4.57708C3.51634 4.57708 3.84431 4.24912 3.84431 3.84344Z"
                fill="#FF9332"
              ></path>
            </g>
          </svg>
        </div>
        <div
          className={`col-lg-6 col-12 ${style.minDiv} justify-content-end px-3 gap-3`}
        >
          <FaUserCircle
            style={{
              marginTop: "1px",
              color: "white",
              fontSize: "30px",
              cursor: "pointer",
            }}
          />
          <svg
            className={`width="32"`}
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            id="ic"
          >
            <g>
              <path
                opacity="0.2"
                d="M16.0011 31.1111C24.3474 31.1111 31.1133 24.3456 31.1133 16C31.1133 7.65436 24.3474 0.888885 16.0011 0.888885C7.65488 0.888885 0.888916 7.65436 0.888916 16C0.888916 24.3456 7.65488 31.1111 16.0011 31.1111Z"
                fill="#FF9332"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28 11.7343V24.5321C28 25.7101 27.0062 26.6667 25.7848 26.6667H6.21556C4.99414 26.6667 4 25.7101 4 24.5321V11.7343C4 10.7839 4.63932 9.98139 5.53117 9.70149L5.86713 9.62737C5.98188 9.60583 6.09696 9.59999 6.21556 9.59999H25.7848C25.9861 9.59999 26.1843 9.6246 26.3697 9.67689C27.3095 9.92264 28 10.7503 28 11.7343Z"
                fill="#FF9332"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.8573 7.55007V13.1204C22.8573 14.3441 21.9115 15.3374 20.749 15.3374H11.2516C10.0892 15.3374 9.14307 14.3441 9.14307 13.1204V7.55007C9.14307 6.56308 9.75151 5.7294 10.6003 5.43874L10.92 5.36208C11.0292 5.33972 11.1387 5.33333 11.2516 5.33333H20.749C20.9407 5.33333 21.1293 5.35888 21.3058 5.41318C22.2002 5.66871 22.8573 6.52794 22.8573 7.55007Z"
                fill="#EA5237"
              ></path>

              <path
                id="path1"
                d="M28 11.8907V15.8426C28 17.1103 27.0062 18.1333 25.7848 18.1333H6.21556C4.99414 18.1333 4 17.1103 4 15.8426V11.8907C4 10.8706 4.63932 10.0093 5.53117 9.70893L5.86713 9.62937C5.98189 9.60626 6.09696 9.59999 6.21556 9.59999H25.7848C25.9861 9.59999 26.1843 9.6264 26.3697 9.68252C27.3095 9.94629 28 10.8346 28 11.8907Z"
                fill="#FFB347"
              >
                <animate
                  attributeName="d"
                  dur="0.3s"
                  begin="ic.mouseenter"
                  repeatCount="1"
                  fill="freeze"
                  to="M28 11.4326V14.5941C28 15.6082 27.0062 16.4267 25.7848 16.4267H6.21556C4.99414 16.4267 4 15.6082 4 14.5941V11.4326C4 10.6165 4.63932 9.92747 5.53117 9.68714L5.86713 9.6235C5.98189 9.60501 6.09696 9.59999 6.21556 9.59999H25.7848C25.9861 9.59999 26.1843 9.62112 26.3697 9.66602C27.3095 9.87703 28 10.5877 28 11.4326Z"
                ></animate>
                <animate
                  attributeName="d"
                  dur="0.3s"
                  begin="ic.mouseleave"
                  repeatCount="1"
                  fill="freeze"
                  to="M28 11.8907V15.8426C28 17.1103 27.0062 18.1333 25.7848 18.1333H6.21556C4.99414 18.1333 4 17.1103 4 15.8426V11.8907C4 10.8706 4.63932 10.0093 5.53117 9.70893L5.86713 9.62937C5.98189 9.60626 6.09696 9.59999 6.21556 9.59999H25.7848C25.9861 9.59999 26.1843 9.6264 26.3697 9.68252C27.3095 9.94629 28 10.8346 28 11.8907Z"
                ></animate>
              </path>
              <path
                id="path2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2557 19.84H9.94637C9.50268 19.84 9.14307 19.5144 9.14307 19.1124V16.3006C9.14307 15.8992 9.50268 15.5733 9.94637 15.5733H11.2557C11.6994 15.5733 12.0593 15.8992 12.0593 16.3006V19.1124C12.0593 19.5144 11.6994 19.84 11.2557 19.84Z"
                fill="#EA5237"
              >
                <animate
                  attributeName="d"
                  dur="0.3s"
                  begin="ic.mouseenter"
                  repeatCount="1"
                  fill="freeze"
                  to="M11.2557 18.1333H9.94637C9.50268 18.1333 9.14307 17.8077 9.14307 17.4057V14.594C9.14307 14.1926 9.50268 13.8667 9.94637 13.8667H11.2557C11.6994 13.8667 12.0593 14.1926 12.0593 14.594V17.4057C12.0593 17.8077 11.6994 18.1333 11.2557 18.1333Z"
                ></animate>
                <animate
                  attributeName="d"
                  dur="0.3s"
                  begin="ic.mouseleave"
                  repeatCount="1"
                  fill="freeze"
                  to="M11.2557 19.84H9.94637C9.50268 19.84 9.14307 19.5144 9.14307 19.1124V16.3006C9.14307 15.8992 9.50268 15.5733 9.94637 15.5733H11.2557C11.6994 15.5733 12.0593 15.8992 12.0593 16.3006V19.1124C12.0593 19.5144 11.6994 19.84 11.2557 19.84Z"
                ></animate>
              </path>
              <path
                id="path3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.3985 19.84H21.0892C20.6455 19.84 20.2859 19.5144 20.2859 19.1124V16.3006C20.2859 15.8992 20.6455 15.5733 21.0892 15.5733H22.3985C22.8422 15.5733 23.2021 15.8992 23.2021 16.3006V19.1124C23.2021 19.5144 22.8422 19.84 22.3985 19.84Z"
                fill="#EA5237"
              >
                <animate
                  attributeName="d"
                  dur="0.3s"
                  begin="ic.mouseenter"
                  repeatCount="1"
                  fill="freeze"
                  to="M22.3985 18.1333H21.0892C20.6455 18.1333 20.2859 17.8077 20.2859 17.4057V14.594C20.2859 14.1926 20.6455 13.8667 21.0892 13.8667H22.3985C22.8422 13.8667 23.2021 14.1926 23.2021 14.594V17.4057C23.2021 17.8077 22.8422 18.1333 22.3985 18.1333Z"
                ></animate>
                <animate
                  attributeName="d"
                  dur="0.3s"
                  begin="ic.mouseleave"
                  repeatCount="1"
                  fill="freeze"
                  to="M22.3985 19.84H21.0892C20.6455 19.84 20.2859 19.5144 20.2859 19.1124V16.3006C20.2859 15.8992 20.6455 15.5733 21.0892 15.5733H22.3985C22.8422 15.5733 23.2021 15.8992 23.2021 16.3006V19.1124C23.2021 19.5144 22.8422 19.84 22.3985 19.84Z"
                ></animate>
              </path>

              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.3991 1.46596C27.8047 1.46596 28.1327 1.138 28.1327 0.73364C28.1327 0.327965 27.8047 0 27.3991 0C26.9947 0 26.6667 0.327965 26.6667 0.73364C26.6667 1.138 26.9947 1.46596 27.3991 1.46596ZM28.4183 29.7198C28.4183 29.3154 28.0903 28.9875 27.6846 28.9875C27.2803 28.9875 26.9523 29.3154 26.9523 29.7198C26.9523 30.1255 27.2803 30.4534 27.6846 30.4534C28.0903 30.4534 28.4183 30.1255 28.4183 29.7198ZM3.24382 31.2467C3.24382 30.841 2.91585 30.5131 2.51148 30.5131C2.10712 30.5131 1.77783 30.841 1.77783 31.2467C1.77783 31.6524 2.10712 31.9804 2.51148 31.9804C2.91585 31.9804 3.24382 31.6524 3.24382 31.2467ZM32.0001 10.5811C32.0001 10.1754 31.6721 9.84748 31.2664 9.84748C30.862 9.84748 30.5341 10.1754 30.5341 10.5811C30.5341 10.9868 30.862 11.3148 31.2664 11.3148C31.6721 11.3148 32.0001 10.9868 32.0001 10.5811ZM3.84431 3.84344C3.84431 3.43908 3.51634 3.11112 3.11198 3.11112C2.70761 3.11112 2.37833 3.43908 2.37833 3.84344C2.37833 4.24912 2.70761 4.57708 3.11198 4.57708C3.51634 4.57708 3.84431 4.24912 3.84431 3.84344Z"
                fill="#FF9332"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      {isMenuClicked && (
        <div
          className={`col-12 position-absolute mt-5 px-3 ${style.mobileDivLinksDiv}`}
        >
          <div className="w-100">
          <Link to="/portfolio" onClick={() => serIsMenuClicked(false)} className="text-white text-decoration-none">
            portfolio
          </Link>
          </div>
          <div className="w-100">
            <Link to="/history" onClick={() => serIsMenuClicked(false)} className="text-white text-decoration-none">
            history
          </Link>
          </div>
          <div className="w-100">
          <Link to="/buy crypto" onClick={() => serIsMenuClicked(false)} className="text-white text-decoration-none">
            portfolio
          </Link>
          </div> 
        </div>
      )}
    </div>
  );
};

export default NavBar;
