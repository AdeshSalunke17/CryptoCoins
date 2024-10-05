import React from "react";
import NewsCard from "../news/newscard/NewsCard";
import style from "./Home.module.css";
import axios from "../../utility/httpRequest";
import { useState } from "react";
import { useEffect } from "react";
import { TbLoader3 } from "react-icons/tb";
import { BsCoin } from "react-icons/bs";
import { MaterialReactTable } from "material-react-table";
import { IoTriangle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import formatPrize from "../../utility/fromatPrize";
import { useGetInitialCoinsListQuery, useGetInitialNewsQuery } from "../../rtkservices/newsservice";
const columns = [
  {
    header: "#",
    size: 50,
    Cell: ({ row }) => row.index + 1,
  },
  {
    header: "Name",
    size: 400,
    Cell: ({ row }) => (
      <div className="d-flex gap-3">
        <img
          src={row.original.icon}
          style={{ height: "35px", width: "40px", borderRadius: "50%" }}
        />
        <p style={{ fontSize: "20px", marginTop: "5px" }}>
          <span style={{ fontWeight: "600" }}>{row.original.name}</span>
          <span style={{ color: "grey" }}>.{row.original.symbol}</span>
        </p>
      </div>
    ),
  },
  {
    header: "price",
    Cell: ({ row }) => {
      const formatedPrize = formatPrize(row.original.price);
      return (
        <p>
          <span style={{ position: "relative", fontSize: "large", top: "3px" }}>
            {formatedPrize}
          </span>
        </p>
      );
    },
  },
  {
    header: "24h Change",
    Cell: ({ row }) => {
      if (row.original.priceChange1d < 0) {
        return (
          <div
            className="p-1 rounded text-center"
            style={{
              backgroundColor: "rgba(240, 41, 52, 0.1)",
              height: "30px",
              width: "80px",
            }}
          >
            <IoTriangle
              style={{
                color: "#ff4d4d",
                fontSize: "10px",
                transform: "rotate(180deg)",
              }}
            />
            <span style={{ color: "#ff4d4d", marginLeft: "5px" }}>
              {row.original.priceChange1d}%
            </span>
          </div>
        );
      }
      return (
        <div
          className="p-1 rounded text-center"
          style={{
            backgroundColor: "rgba(52, 179, 73, 0.1)",
            height: "30px",
            width: "80px",
          }}
        >
          <IoTriangle style={{ color: "#6ccf59", fontSize: "10px" }} />
          <span style={{ color: "#6ccf59", marginLeft: "5px" }}>
            {row.original.priceChange1d}%
          </span>
        </div>
      );
    },
  },
  {
    header: "  ",
    size: 100,
  },
];
const Home = () => {
  
  // const [newsData, setNewsData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const fetchInitialNews = async () => {
  //   setIsLoading(true);
  //   const data = await axios.get("/news/type/trending?limit=4");
  //   setNewsData(data.data);
  //   setIsLoading(false);
  // };
  // useEffect(() => {
    //   // throw new Error() 
    //   fetchInitialNews();
    // }, []);
    const {isLoading:isNewsLoading, isError, data:newsData}=useGetInitialNewsQuery();

  // const [tableData, setTableData] = useState([]);
  // const [isTableDataLoading, setIsTableLoading] = useState(false);
  // const getTableData = async () => {
  //   setIsTableLoading(true);
  //   const data = await axios.get("/coins?page=1&limit=5&currency=INR");
  //   setTableData(data.data.result);
  //   setIsTableLoading(false);
  //   // console.log(tableData);
  // };
  // useEffect(() => {
  //   getTableData();
  // }, []);
const {isLoading:isTableDataLoading,data:tableData}=useGetInitialCoinsListQuery();

  const navigate = useNavigate();
  const handleRowClick = (rowData) => {
    navigate(`/coins/${rowData.original.id}`, { state: rowData.original });
  };
  return (
    <div className={`w-100 position-relative ${style.main}`}>
      <div className={`col-12 text-center ${style.headingDiv}`}>
        <h1
          style={{
            fontWeight: 800,
            color: "white",
          }}
        >
          Manage All Your Wallets & Exchanges From One Place
        </h1>
        <p style={{ color: "whitesmoke", fontWeight: 100 }}>
          Connect your entire portfolio to track, buy, swap, and stake your
          assets.
        </p>
        <div
          className={`w-100 pt-3 d-flex flex-wrap justify-content-center ${style.newsDiv}`}
        >
          {isNewsLoading
            ? Array.from({ length: 4 }, () => 1).map(() => {
                return (
                  <div className="col-lg-3 col-md-4 col-6 px-3 pb-2 d-flex justify-content-center">
                    <div
                      className="shimmer-div"
                      style={{
                        height: "168px",
                        width: "124px",
                        borderRadius: "16px",
                      }}
                    ></div>
                  </div>
                );
              })
            : newsData.map((news) => {
                return (
                  <div className="col-lg-3 col-md-4 col-6 px-3 pb-2 d-flex justify-content-center">
                    <NewsCard news={news} />
                  </div>
                );
              })}
          {/* <div className="col-lg-3 col-md-4 col-6 px-3 pb-2 d-flex justify-content-center">
            <NewsCard />
          </div>
          <div className="col-lg-3 col-md-4 col-6 px-3 pb-2 d-flex justify-content-center">
            <NewsCard />
          </div>
          <div className="col-lg-3 col-md-4 col-6 px-3 pb-2 d-flex justify-content-center">
            <NewsCard />
          </div>
          <div className="col-lg-3 col-md-4 col-6 px-3 pb-2 d-flex justify-content-center">
            <NewsCard />
          </div> */}
        </div>
      </div>
      <div className={`col-12 pt-3 d-flex flex-wrap ${style.coinTableDiv}`}>
        <div
          className="col-md-2 col-4 pb-1 "
          style={{ borderBottom: "2px solid #DD9A35" }}
        >
          <p style={{ color: "white" }}>
            <BsCoin style={{ fontSize: "30px" }} />
            <span
              style={{
                marginLeft: "6px",
                position: "relative",
                top: "6px",
                fontSize: "25px",
              }}
            >
              Coins
            </span>
          </p>
        </div>
        <div className="col-12 mt-3">
          {isTableDataLoading ? (
            <div
              className="col-12 d-flex justify-content-center"
              style={{ height: "350px", background: "transparent" }}
            >
              <TbLoader3
                style={{
                  color: "white",
                  fontSize: "40px",
                  animation: `${style.rotateAnimation} 1s linear infinite`,
                }}
              />
            </div>
          ) : (
            <MaterialReactTable
              columns={columns}
              data={tableData.result}
              enableTopToolbar={false}
              enableColumnActions={false}
              enableSorting={false}
              enableBottomToolbar={false}
              muiTableBodyCellProps={{
                sx: {
                  borderBottom: "1px solid rgb(13, 13, 13)",
                  backgroundColor: "rgb(13, 13, 13)",
                  color: "white",
                  padding: "5px 5px",
                  cursor: "pointer",
                },
              }}
              muiTableHeadCellProps={{
                sx: {
                  borderBottom: "1px solid rgb(13, 13, 13)",
                  backgroundColor: "rgb(13, 13, 13)",
                  color: "white",
                },
              }}
              muiTableBodyRowProps={({ row }) => {
                return {
                  onClick: () => handleRowClick(row),
                };
              }}
            />
          )}
          <div className="col-12 mt-4 d-flex justify-content-center">
            <button
              className={` rounded-4 ${style.seeMoreButton}`}
              onClick={() => {
                navigate("/coins");
              }}
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
