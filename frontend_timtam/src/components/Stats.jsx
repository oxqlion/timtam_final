import React from 'react'
import stats from '../../assets/stats_dummy.png'
import '../components/Stats.css'

const Stats = () => {
  return (
    <div className='stats-outer'>
      <img src={stats} alt="" />
    </div>
  )
}

export default Stats