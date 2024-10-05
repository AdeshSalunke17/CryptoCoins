import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeHistory } from '../../features/historyslice/historySlice';
import style from './History.module.css'
import HistoryCard from './HistoryCard';
const History = () => {
    const history=useSelector(state=>state.history);
    const dispatch=useDispatch()
    // console.log(history);
  return (
    <div className={`${style.main} w-100 bg-black p-5 text-center`} style={{minHeight:window.innerHeight}}>
        {
            history.length !== 0 ? <>
            <h1 style={{
            fontWeight: 800,
            color: "white",
          }}>You have currently visited this coins</h1>
          <button onClick={()=>{dispatch(removeHistory())}} className='rounded border-0 p-1 float-end mt-2'>clear history</button>
          <div className={`${style.container} d-flex flex-wrap`}>
            {
                history.map((coin)=>{
                    return <HistoryCard coin={coin}/>
                })
            }
            
          </div>
            </> : 
            <h1 style={{
                fontWeight: 800,
                color: "white",
              }}>You have currently not visited any of coins</h1>
        }
        
    </div>
  )
}

export default History