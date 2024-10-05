import React from 'react'
import style from'./History.module.css'
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import formatPrize from '../../utility/fromatPrize';
const HistoryCard = (props) => {
    const navigate=useNavigate()
    const handleClick = () =>{
        navigate(`/coins/${props.coin.id}`, { state: props.coin });
    }
  return (
    <div class={`${style.card} p-3`}>
      <div class={`${style.face} ${style.face1}`}>
        <div class={`${style.content}`}>
            <img src={props.coin.icon} alt="" style={{ height: "90px", width: "90px", borderRadius: "50%" }}/>       
          <h3 className='mt-2'>{props.coin.name}</h3>
        </div>
      </div>
      <div class={`${style.face} ${style.face2}`}>
        <div class={`${style.content}`}>
          <p>Current Prize: {props.coin.price ? formatPrize(props.coin.price) :'unavailable'}</p>
          <a type="button" onClick={handleClick}>Details</a>
        </div>
      </div>
   </div>
  )
}

export default HistoryCard