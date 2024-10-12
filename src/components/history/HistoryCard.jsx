import React from 'react'
import style from'./History.module.css'
import { useNavigate } from 'react-router-dom';
import formatPrize from '../../utility/fromatPrize';
const HistoryCard = (props) => {
    const navigate=useNavigate()
    const handleClick = () =>{
        navigate(`/coins/${props.coin.id}`, { state: props.coin });
    }
  return (
    <div className={`${style.card} p-3`}>
      <div className={`${style.face} ${style.face1}`}>
        <div className={`${style.content}`}>
            <img src={props.coin.icon} alt="" style={{ height: "90px", width: "90px", borderRadius: "50%" }}/>       
          <h3 className='mt-2'>{props.coin.name}</h3>
        </div>
      </div>
      <div className={`${style.face} ${style.face2}`}>
        <div className={`${style.content}`}>
          <p>Current Prize: {props.coin.price ? formatPrize(props.coin.price) :'unavailable'}</p>
          <button onClick={handleClick}>Details</button>
          {/* <a type="button" onClick={handleClick}>Details</a> */}
        </div>
      </div>
   </div>
  )
}

export default HistoryCard