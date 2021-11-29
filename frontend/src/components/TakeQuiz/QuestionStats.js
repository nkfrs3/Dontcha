import React, {useEffect, useState, useRef} from 'react'
import { csrfFetch } from '../../store/csrf'
import './Stats.css'

const QuestionStats = ({currentQuestion}) => {
  const [stats, setStats] = useState([]);
  const [prepared, setPrepared] = useState();
  const totalSubmissions = useRef(0);

  useEffect(()=>{
    console.log(stats)
    console.log(prepared)

    let obj = {}
      stats.map(stat => {
      const value = stat.value;
      if (obj[value]){
        obj[value] ++;
      } else obj[value] = 1;
    })
    setPrepared(obj);
  }, [stats])

  useEffect(() => {
    fetch(`/api/answers/stats/${currentQuestion.id}`).then(res => res.json())
    .then(json => {setStats(json); totalSubmissions.current = json.length})
  }, [currentQuestion])

  const formatPercent = (num, total) => {
    console.log(total, num)

    return ((num/total) * 100).toFixed(2)
  }

  return (
    <div className='stats-container'>
      <h2>Other Users Chose</h2>
      <div className='line'></div>

      <div className='stats-inner'>
        <div className='ans-stats'>
      { prepared && Object.keys(prepared).map(key =>
        <span className='stats-key'>{key}</span>
        )}
      </div>

      <div className='percent-bar-stats'>
       {prepared && Object.values(prepared).map(val =>
          <div className='percent-bar-wrap'>
          <span className='percent-bar' style={{width: `${formatPercent(val, totalSubmissions.current)}%`}}></span>
          </div>
        )}
       </div>

      <div className='perc-stats'>

      {prepared && Object.values(prepared).map(val =>

        <span className='stats-val'>{formatPercent(val, totalSubmissions.current)}%</span>

        )}
      </div>
      </div>

    </div>
  )
}

export default QuestionStats
