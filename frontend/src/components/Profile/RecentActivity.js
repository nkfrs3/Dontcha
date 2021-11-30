import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'

const RecentActivity = ({userId}) => {

  const [recentAttemps, setRecentAttempts] = useState([]);

   useEffect(() => {
     fetch(`/api/quizzes/scores/${userId}`).then(res => res.json())
     .then(json => setRecentAttempts(json));
   }, [])

   const formatDateAndTime = (date) => {
    const time = new Date(date).toLocaleTimeString('en');
    // const timeArr = time.split(':')
    // const timeStr = `${timeArr[0]}:${timeArr[1]} ${timeArr[2].slice(-2)}`
    const arr = date.split('-');
    const monthAndDay = `${arr[1]}/${arr[2].slice(0,2)}/${arr[0]}`
    return `${monthAndDay}`;
    }
  return (
    <div>
      { recentAttemps.length > 0 ?

       <table className='recent-table'>
       <tr>
         <th>Quiz</th>
         <th>Score</th>
         <th>Taken On</th>
       </tr>
       { recentAttemps.length > 0 && recentAttemps?.map( attempt =>

        <tr>
        <td>{attempt.quiz.title}</td>
        <td>{attempt.value}%</td>
        <td>{formatDateAndTime(attempt.createdAt)}</td>
        </tr>
          )}
        </table>

         : <div>No Recent Activity</div> }


    </div>
    )
}

export default RecentActivity
