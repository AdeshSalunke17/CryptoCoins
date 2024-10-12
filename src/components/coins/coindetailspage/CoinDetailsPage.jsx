import React, { useEffect, useState } from "react";
import style from "./CoinDetailsPage.module.css";
import { useLocation } from "react-router-dom";
import formatPrize from "../../../utility/fromatPrize";
import PricePercentageBadge from "../../pricepercentagebadge/PricePercentageBadge";
import CandlestickChart from "../../chart/CandlestickChart";
import axios from "../../../utility/httpRequest";
import { TbLoader3 } from "react-icons/tb";
import formatToBillionOrTrillion from "../../../utility/formatToBillionOrTrillion";
import InformationComponent from "./InformationComponent";
import BuyCoinModal from "../../buycoinmodal/BuyCoinModal";
import { addHistory } from "../../../features/historyslice/historySlice";
import { useDispatch } from "react-redux";

const CoinDetailsPage = () => {
  const location = useLocation();
  const coin = location.state;
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(addHistory(coin))
  },[coin,dispatch])
  const [chartData, setChartData] = useState({
    period: "24h",
    data: [],
  });
  const [isChartDataLoading, setIsChartDataLoading] = useState(false);
  const getChartData = async () => {
    setIsChartDataLoading(true);
    const refdata = await axios.get(
      `/coins/${coin.id}/charts?period=${chartData.period}`
    );
    setChartData({ ...chartData, data: refdata.data });
    setIsChartDataLoading(false);
  };
  useEffect(() => {
    getChartData();
  }, [chartData.period]);
  const [buyCoinModal, setBuyCoinModal] = useState(false);
  const [buyCoinDetails, setBuyCoinDetails] = useState(null);
  const handleClick = () => {
    setBuyCoinDetails(coin);
    setBuyCoinModal(true);
  };
  return (
    <>
      {buyCoinDetails && (
        <BuyCoinModal
          show={buyCoinModal}
          setBuyCoinModal={setBuyCoinModal}
          buyCoinDetails={buyCoinDetails}
        />
      )}

      <div
        className={`w-100 py-5 bg-black d-flex flex-wrap ${style.coindetailsMain}`}
      >
        <div
          className="rounded py-1 px-2"
          style={{ height: "30px", backgroundColor: "#FF9500" }}
        >
          <p style={{ fontSize: "14px", fontWeight: "600" }}>
            Rank #{coin.rank}
          </p>
        </div>
        <div className="col-12 py-3 d-flex">
          <div className="col-md-6 col-12">
            <div className="d-flex gap-3">
              <img
                src={coin.icon}
                style={{ height: "45px", width: "50px", borderRadius: "50%" }}
                alt=""
              />
              <p style={{ fontSize: "26px", marginTop: "5px" }}>
                <span style={{ fontWeight: "600", color: "white" }}>
                  {coin.name}
                </span>
                <span
                  style={{
                    color: "grey",
                    fontWeight: "600",
                    fontSize: "19px",
                    marginLeft: "7px",
                  }}
                >
                  .{coin.symbol}
                </span>
              </p>
            </div>
            <div className="d-flex gap-3">
              <h2
                style={{
                  fontSize: "xx-large",
                  color: "white",
                  fontWeight: 700,
                }}
              >
                {formatPrize(coin.price)}
              </h2>
              <PricePercentageBadge currentpercentage={coin.priceChange1d} />
            </div>
          </div>
          <div className={`col-md-6 ${style.buyButtonDiv}`}>
            <button
              className="rounded-4"
              style={{
                border: "transparent",
                padding: "10px 60px",
                fontSize: "20px",
                fontWeight: 500,
                backgroundColor: "#FF9500",
                float: "right",
              }}
              onClick={() => handleClick()}
            >
              Buy {coin.name}
            </button>
          </div>
        </div>
        <div className="col-12 py-3" style={{ height: "400px" }}>
          <div
            className="col-12 h-100 rounded-5 d-flex flex-wrap"
            style={{ background: "rgb(13, 13, 13)" }}
          >
            <div
              className="col-12 p-3 d-flex flex-wrap"
              style={{ height: "59px" }}
            >
              <div className="col-3"></div>
              <div className="col-9 d-flex justify-content-end">
                <ul className="d-flex gap-2 list-unstyled">
                  <li
                    className={`rounded px-2 pt-1 ${
                      chartData.period === "24h" && style.liColor
                    }`}
                    onClick={() => {
                      setChartData({ ...chartData, period: "24h" });
                    }}
                  >
                    24H
                  </li>
                  <li
                    className={`rounded px-2 pt-1 ${
                      chartData.period === "1w" && style.liColor
                    }`}
                    onClick={() => {
                      setChartData({ ...chartData, period: "1w" });
                    }}
                  >
                    1W
                  </li>
                  <li
                    className={`rounded px-2 pt-1 ${
                      chartData.period === "1m" && style.liColor
                    }`}
                    onClick={() => {
                      setChartData({ ...chartData, period: "1m" });
                    }}
                  >
                    1M
                  </li>
                  <li
                    className={`rounded px-2 pt-1 ${
                      chartData.period === "3m" && style.liColor
                    }`}
                    onClick={() => {
                      setChartData({ ...chartData, period: "3m" });
                    }}
                  >
                    3M
                  </li>
                  <li
                    className={`rounded px-2 pt-1 ${
                      chartData.period === "6m" && style.liColor
                    }`}
                    onClick={() => {
                      setChartData({ ...chartData, period: "6m" });
                    }}
                  >
                    6M
                  </li>
                  <li
                    className={`rounded px-2 pt-1 ${
                      chartData.period === "1y" && style.liColor
                    }`}
                    onClick={() => {
                      setChartData({ ...chartData, period: "1y" });
                    }}
                  >
                    1Y
                  </li>
                  <li
                    className={`rounded px-2 pt-1 ${
                      chartData.period === "all" && style.liColor
                    }`}
                    onClick={() => {
                      setChartData({ ...chartData, period: "all" });
                    }}
                  >
                    All
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              {isChartDataLoading ? (
                <div className="w-100 d-flex justify-content-center">
                  <TbLoader3
                    style={{
                      color: "white",
                      fontSize: "40px",
                      animation: `${style.rotateAnimation} 1s linear infinite`,
                    }}
                  />
                </div>
              ) : (
                <CandlestickChart data={chartData.data} />
              )}
            </div>
          </div>
        </div>
        <div className={`col-12 p-3 ${style.buyButtonDiv2} text-center`}>
          <button
            className="rounded-4"
            style={{
              border: "transparent",
              padding: "10px 60px",
              fontSize: "20px",
              fontWeight: 500,
              backgroundColor: "#FF9500",
            }}
            onClick={handleClick}
          >
            Buy {coin.name}
          </button>
        </div>
        <div className="col-12">
          <h3 style={{ color: "white" }}>Market Stats</h3>
          <div
            className="col-12 mt-3 p-3 rounded-4 d-flex flex-wrap"
            style={{ background: "rgb(13,13,13)" }}
          >
            {[
              {
                heading: "Market Cap",
                currentPrize: coin.marketCap,
                info: "The Market Capitalization of a cryptocurrency is its current price multiplied by its circulating supply (the total number mined coins).",
                formula: "Market Cap = Current Price * Circulating Supply",
              },
              {
                heading: "Available Supply",
                currentPrize: coin.availableSupply,
              },
              {
                heading: "Total Supply",
                currentPrize: coin.totalSupply,
                info: "Thr total supply of a cryptocurrency is referring to the total amount of coins in circulation or locked minus the removed ones.",
                formula:
                  "Total supply = Onchain Supply - Coins Removed from Circulation",
              },
              {
                heading: "Volume 24h",
                currentPrize: coin.volume,
                info: "Volume 24h is referring to the amount of a cryptocurrency traded in the previous 24 hours.",
              },
            ].map((obj) => {
              return (
                <div className="col-lg-3 col-md-4 col-12 py-2">
                  <h6
                    style={{
                      color: "grey",
                      fontWeight: 400,
                      lineHeight: "20px",
                    }}
                  >
                    {obj.heading}
                    {obj.info && (
                      <InformationComponent
                        message={obj.info}
                        formula={obj.formula}
                      />
                    )}
                  </h6>
                  <h4 style={{ color: "white" }}>
                    {obj.heading === "Market Cap" ||
                    obj.heading === "Volume 24h"
                      ? formatToBillionOrTrillion(obj.currentPrize)
                      : formatPrize(obj.currentPrize).substring(1)}
                  </h4>
                </div>
              );
            })}
            {[
              {
                heading: "Price Change(1h)",
                currentPrize: coin.priceChange1h,
                info: "Change in the price over 1 hour",
              },
              {
                heading: "Price Change(1d)",
                currentPrize: coin.priceChange1d,
                info: "Change in the price over 24 hour",
              },
              {
                heading: "Price Change(1w)",
                currentPrize: coin.priceChange1w,
                info: "Change in the price over 1 week",
              },
            ].map((obj) => {
              return (
                <div className="col-lg-3 col-md-4 col-12 py-2">
                  <h6
                    style={{
                      color: "grey",
                      fontWeight: 400,
                      lineHeight: "25px",
                    }}
                  >
                    {obj.heading}
                    {obj.info && (
                      <InformationComponent
                        message={obj.info}
                        formula={obj.formula}
                      />
                    )}
                  </h6>
                  <PricePercentageBadge currentpercentage={obj.currentPrize} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinDetailsPage;
