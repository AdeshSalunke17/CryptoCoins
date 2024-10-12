import React from "react";
import style from "./CoinsListPage.module.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../../utility/httpRequest";
import PricePercentageBadge from "../../pricepercentagebadge/PricePercentageBadge";
import formatPrize from "../../../utility/fromatPrize";
import { MaterialReactTable } from "material-react-table";
import { useNavigate } from "react-router-dom";
import formatToBillionOrTrillion from "../../../utility/formatToBillionOrTrillion";
import "../../../App.css";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {motion} from 'framer-motion'
import criptoImgae from '../../../assets/cryptologo.png'
const columns = [
  {
    header: "#",
    size: 50,
    Cell: ({ row }) => row.original.rank,
  },
  {
    header: "Name",
    size: 400,
    Cell: ({ row }) => (
      <div className="d-flex gap-3">
        <img
          src={row.original.icon}
          style={{ height: "35px", width: "40px", borderRadius: "50%" }}
          alt=""
        />
        <p style={{ fontSize: "20px", marginTop: "5px" }}>
          <span style={{ fontWeight: "600" }}>{row.original.name}</span>
          <span style={{ color: "grey" }}>.{row.original.symbol}</span>
        </p>
      </div>
    ),
  },
  {
    header: "1h%",
    Cell: ({ row }) => (
      <PricePercentageBadge currentpercentage={row.original.priceChange1h} />
    ),
  },
  {
    header: "24h%",
    Cell: ({ row }) => (
      <PricePercentageBadge currentpercentage={row.original.priceChange1d} />
    ),
  },
  {
    header: "7d%",
    Cell: ({ row }) => (
      <PricePercentageBadge currentpercentage={row.original.priceChange1w} />
    ),
  },
  {
    header: "price",
    Cell: ({ row }) => {
      return (
        <p>
          <span style={{ position: "relative", fontSize: "large", top: "3px" }}>
            {formatPrize(row.original.price)}
          </span>
        </p>
      );
    },
  },
  {
    header: "Market Cap",
    Cell: ({ row }) => {
      return (
        <p>
          <span style={{ position: "relative", fontSize: "large", top: "3px" }}>
            {formatToBillionOrTrillion(row.original.marketCap)}
          </span>
        </p>
      );
    },
  },
  {
    header: "Volume 24H",
    Cell: ({ row }) => {
      return (
        <p>
          <span style={{ position: "relative", fontSize: "large", top: "3px" }}>
            {formatToBillionOrTrillion(row.original.volume)}
          </span>
        </p>
      );
    },
  },
];
const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          width: "100%", // Set width to 100%
        },
        text: {
          color: "white", // Set font color to white
        },
      },
    },
  },
});
const CoinsListPage = () => {
  const [marketData, setMarketData] = useState({});
  const [isMarketDataLoading, setIsMarketDataLoading] = useState(false);
  const getMarketData = async () => {
    setIsMarketDataLoading(true);
    const data = await axios.get("/markets");
    setMarketData(data.data);
    setIsMarketDataLoading(false);
  };
  useEffect(() => {
    getMarketData();
  }, []);
  const [coinsData, setCoinsData] = useState([]);
  const [isCoinsDataLoading,setIsCoinsDataLoading]=useState(false)
  const [pageNumber, setPageNumber] = useState(1);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  }
  const handleChange = (event, value) => {
    setPageNumber(value);
  };
  const [pagecount, setPageCount] = useState(0);

  const getCoinsData = async () => {
    setIsCoinsDataLoading(true)
    const data = await axios
      .get(`/coins?page=${pageNumber}&limit=20&currency=INR`)
      .catch((error) => {
        window.alert("Something went wrong.Please try again...");
      });
    setPageCount(data.data.meta.pageCount);
    setCoinsData(data.data.result);
    setIsCoinsDataLoading(false)
  };
  useEffect(() => {
    getCoinsData();
    scrollToTop()
  }, [pageNumber]);
  const navigate = useNavigate();
  const handleRowClick = (rowData) => {
    navigate(`/coins/${rowData.original.id}`, { state: rowData.original });
  };
  return (
    <div className="w-100 bg-black">
      <div className="container w-100 pt-5">
        <div className="w-100 text-center">
          <h1 style={{ color: "white", fontWeight: 500 }}>
            Today's Crypto Prices by Market Cap
          </h1>
          <p style={{ color: "white" }}>
            The worldwide cryptocurrency market capitalization today stands at
            an estimated ₹208T , seeing a 4.80% movement over the last 24 hours.
            The total cryptocurrency trading volume in the past day is roughly
            ₹9T. Bitcoin's market dominance is at about 52.4%.
          </p>
        </div>
        <div
          className={`col-12 py-3 d-flex flex-wrap ${style.marketContentDiv}`}
        >
          {isMarketDataLoading ? (
            <>
              <div className="col-lg-4 col-md-6 col-12 p-1">
                <div
                  className="w-100 rounded p-2 shimmer-div"
                  style={{ height: "100px" }}
                ></div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 p-1">
                <div
                  className="w-100 rounded p-2 shimmer-div"
                  style={{ height: "100px" }}
                ></div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 p-1">
                <div
                  className="w-100 rounded p-2 shimmer-div"
                  style={{ height: "100px" }}
                ></div>
              </div>
            </>
          ) : (
            <>
              {marketData.marketCap && (
                <div className="col-lg-4 col-md-6 col-12 p-1">
                  <div
                    className="w-100 rounded p-2"
                    style={{
                      backgroundColor:
                        marketData.marketCapChange < 0
                          ? "rgba(240, 41, 52, 0.1)"
                          : "rgba(50, 215, 75, 0.1)",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontSize: "12px",
                        marginBottom: "7px",
                      }}
                    >
                      MarketCap
                    </p>
                    <h5 style={{ color: "white" }}>
                      {formatPrize(marketData.marketCap)}
                    </h5>
                    <PricePercentageBadge
                      currentpercentage={marketData.marketCapChange}
                    />
                  </div>
                </div>
              )}

              {marketData.volume && (
                <div className="col-lg-4 col-md-6 col-12 p-1">
                  <div
                    className="w-100 rounded p-2"
                    style={{
                      backgroundColor:
                        marketData.volumeChange < 0
                          ? "rgba(240, 41, 52, 0.1)"
                          : "rgba(50, 215, 75, 0.1)",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontSize: "12px",
                        marginBottom: "7px",
                      }}
                    >
                      Volume 24h
                    </p>
                    <h5 style={{ color: "white" }}>
                      {formatPrize(marketData.volume)}
                    </h5>
                    <PricePercentageBadge
                      currentpercentage={marketData.volumeChange}
                    />
                  </div>
                </div>
              )}

              {marketData.btcDominance && (
                <div className="col-lg-4 col-md-6 col-12 p-1">
                  <div
                    className="w-100 rounded p-2"
                    style={{
                      backgroundColor:
                        marketData.btcDominanceChange < 0
                          ? "rgba(240, 41, 52, 0.1)"
                          : "rgba(50, 215, 75, 0.1)",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontSize: "12px",
                        marginBottom: "7px",
                      }}
                    >
                      BTC Dominance
                    </p>
                    <h5 style={{ color: "white" }}>
                      {marketData.btcDominance + "%"}
                    </h5>
                    <PricePercentageBadge
                      currentpercentage={marketData.btcDominanceChange}
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <div className="w-100 py-3 d-flex flex-wrap">
          <div
            className="col-2 py-1 text-center"
            style={{ borderBottom: "2px solid #DD9A35" }}
          >
            <p
              style={{
                color: "white",
                fontWeight: "600",
                paddingBottom: "0px",
              }}
            >
              Cryptocurrencies
            </p>
          </div>
          <div className={`w-100 py-4 ${style.tableContainer}`}>
            {
              isCoinsDataLoading ?
              <motion.img src={criptoImgae} style={{width:"50px",height:"50px",marginLeft:"50%",transform:"translate(50%, 50%)"}}
              animate={{ scale: [1, 1.5, 1], transition: { duration: 0.5, repeat: Infinity } }}
              ></motion.img>
              : coinsData.length > 0 && (
                <>
                <MaterialReactTable
                  columns={columns}
                  data={coinsData}
                  enableTopToolbar={false}
                  enableColumnActions={false}
                  enableSorting={false}
                  enableBottomToolbar={false}
                  enablePagination={false}
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
                <div className="w-100 py-5 d-flex justify-content-center">
              <ThemeProvider theme={theme}>
                <Pagination
                  count={pagecount}
                  color="primary"
                  page={pageNumber}
                  onChange={handleChange}
                />
              </ThemeProvider>
            </div>
                </>
              )
              
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinsListPage;

// [
//   {
//     id: "bitcoin",
//     icon: "https://static.coinstats.app/coins/1650455588819.png",
//     name: "Bitcoin",
//     symbol: "BTC",
//     rank: 1,
//     price: 5511818.224272206,
//     priceBtc: 1,
//     volume: 7008407975895.75,
//     marketCap: 108577147357209.69,
//     availableSupply: 19698971,
//     totalSupply: 21000000,
//     priceChange1h: 0.47,
//     priceChange1d: 6.53,
//     priceChange1w: 7.15,
//     redditUrl: "https://www.reddit.com/r/Bitcoin/",
//     websiteUrl: "https://bitcoin.org",
//     twitterUrl: "https://twitter.com/bitcoin",
//     explorers: [
//       "https://mempool.space/",
//       "https://blockchair.com/bitcoin/",
//       "https://btc.com/",
//       "https://btc.tokenview.io/",
//       "https://www.oklink.com/btc",
//       "https://3xpl.com/bitcoin",
//       "https://blockchain.coinmarketcap.com/chain/bitcoin",
//       "https://blockexplorer.one/btc/mainnet",
//     ],
//   },
//   {
//     id: "ethereum",
//     icon: "https://static.coinstats.app/coins/1650455629727.png",
//     name: "Ethereum",
//     symbol: "ETH",
//     rank: 2,
//     price: 252019.4560349653,
//     priceBtc: 0.04572361067877415,
//     volume: 2339357914471.409,
//     marketCap: 30272176347984.938,
//     availableSupply: 120118410,
//     totalSupply: 120118410,
//     priceChange1h: 0.39,
//     priceChange1d: 3.92,
//     priceChange1w: 0.57,
//     redditUrl: "https://www.reddit.com/r/ethereum",
//     websiteUrl: "https://www.ethereum.org/",
//     twitterUrl: "https://twitter.com/ethereum",
//     contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
//     decimals: 18,
//     explorers: [
//       "https://etherscan.io/",
//       "https://ethplorer.io/",
//       "https://blockchair.com/ethereum",
//       "https://eth.tokenview.io/",
//       "https://www.oklink.com/eth",
//       "https://3xpl.com/ethereum",
//       "https://blockchain.coinmarketcap.com/chain/ethereum",
//     ],
//   },
//   {
//     id: "tether",
//     icon: "https://static.coinstats.app/coins/1650455771843.png",
//     name: "Tether",
//     symbol: "USDT",
//     rank: 3,
//     price: 83.43580129941003,
//     priceBtc: 0.000015137664985502111,
//     volume: 4683510009888.193,
//     marketCap: 9257391832948.426,
//     availableSupply: 110952273350,
//     totalSupply: 110952273350,
//     priceChange1h: 0.05,
//     priceChange1d: 0.04,
//     priceChange1w: -0.16,
//     redditUrl: "https://www.reddit.com",
//     websiteUrl: "https://tether.to/",
//     twitterUrl: "https://twitter.com/Tether_to",
//     contractAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7",
//     decimals: 18,
//     explorers: [
//       "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7",
//       "https://ethplorer.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7",
//       "https://explorer.kava.io/token/0x919c1c267bc06a7039e03fcc2ef738525769109c",
//       "https://avascan.info/blockchain/c/address/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7/token",
//       "https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
//       "https://nearblocks.io/token/usdt.tether-token.near",
//       "https://tonscan.org/address/EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
//       "https://celoscan.io/token/0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e",
//       "https://explorer.celo.org/mainnet/token/0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e",
//       "https://www.omniexplorer.info/asset/31",
//     ],
//   },
//   {
//     id: "binance-coin",
//     icon: "https://static.coinstats.app/coins/1666608145347.png",
//     name: "BNB",
//     symbol: "BNB",
//     rank: 4,
//     price: 48883.036036332094,
//     priceBtc: 0.008868795067201622,
//     volume: 376245880705.9801,
//     marketCap: 7520955724861.316,
//     availableSupply: 153856150,
//     totalSupply: 153856150,
//     priceChange1h: 0.37,
//     priceChange1d: 2.87,
//     priceChange1w: -2.47,
//     redditUrl: "https://www.reddit.com/r/binance",
//     websiteUrl: "https://www.binance.com",
//     twitterUrl: "https://twitter.com/binance",
//     contractAddress: "BNB",
//     decimals: 18,
//     explorers: [
//       "https://bscscan.com",
//       "https://explorer.binance.org/",
//       "https://binance.mintscan.io/",
//       "https://etherscan.io/token/0xb8c77482e45f1f44de1745f52c74426c631bdd52",
//       "https://ethplorer.io/address/0xb8c77482e45f1f44de1745f52c74426c631bdd52",
//       "https://www.oklink.com/bsc",
//       "https://3xpl.com/bnb",
//       "https://explorer.energi.network/token/0xc3c19ee91cf3c1f7fbf3716a09d21dc35de0bd6d",
//     ],
//   },
//   {
//     id: "solana",
//     icon: "https://static.coinstats.app/coins/1701234596791.png",
//     name: "Solana",
//     symbol: "SOL",
//     rank: 5,
//     price: 13546.540014724638,
//     priceBtc: 0.0024577337457302086,
//     volume: 509833574474.75916,
//     marketCap: 6077698052405.355,
//     availableSupply: 448653165,
//     totalSupply: 576006727,
//     priceChange1h: 0.54,
//     priceChange1d: 12.84,
//     priceChange1w: 12.04,
//     redditUrl: "https://www.reddit.com/r/solana",
//     websiteUrl: "https://solana.com/",
//     twitterUrl: "https://twitter.com/solana",
//     contractAddress: "0x7dff46370e9ea5f0bad3c4e29711ad50062ea7a4",
//     decimals: 18,
//     explorers: [
//       "https://solscan.io/",
//       "https://xray.helius.xyz/",
//       "https://solana.fm/",
//       "https://solanabeach.io/",
//       "https://www.oklink.com/sol",
//       "https://explorer.solana.com/",
//     ],
//   },
// ]
